import { NextResponse, NextRequest } from 'next/server';
import { connectToDb } from '../db';
import type { Db, Filter, WithId } from 'mongodb';
import { MediaItem } from '@/app/media/media-data';

const TAGS = ['neuroscience', 'books', 'music'] as const;
const TYPES = ['watch', 'listen', 'read'] as const;

type Tag = typeof TAGS[number];
type TypeK = typeof TYPES[number];

const GROUPS: Record<
  'read' | 'interviews' | 'performances',
  { types: TypeK[]; tags?: Tag[] }
> = {
  read: { types: ['read'] },
  interviews: { types: ['watch', 'listen'], tags: ['neuroscience', 'books'] },
  performances: { types: ['watch', 'listen'], tags: ['music'] },
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const groupRaw = (searchParams.get('group') ?? '').toLowerCase();
    const typesRaw = (searchParams.get('types') ?? searchParams.get('type') ?? '')
      .split(',')
      .map(s => s.trim().toLowerCase())
      .filter(Boolean);
    const tagsRaw = (searchParams.get('tags') ?? '')
      .split(',')
      .map(s => s.trim().toLowerCase())
      .filter(Boolean);

    let types: TypeK[] | undefined;
    let tags: Tag[] | undefined;

    if (groupRaw) {
      if (!(groupRaw in GROUPS)) {
        return NextResponse.json({ error: `Unknown group: ${groupRaw}` }, { status: 400 });
      }
      types = GROUPS[groupRaw as keyof typeof GROUPS].types;
      tags = GROUPS[groupRaw as keyof typeof GROUPS].tags;
    } else {
      if (!typesRaw.length) {
        return NextResponse.json({ error: 'No types provided' }, { status: 400 });
      }
      const badType = typesRaw.find(t => !TYPES.includes(t as TypeK));
      if (badType) return NextResponse.json({ error: `Unknown type: ${badType}` }, { status: 400 });
      types = typesRaw as TypeK[];

      if (tagsRaw.length) {
        const badTag = tagsRaw.find(t => !TAGS.includes(t as Tag));
        if (badTag) return NextResponse.json({ error: `Unknown tag: ${badTag}` }, { status: 400 });
        tags = tagsRaw as Tag[];
      }
    }

    const { db } = await connectToDb();
    const collection = db.collection<MediaItem>('media');

    const query: Filter<MediaItem> = {
      type: { $in: types },
    };
    if (tags?.length) {
      query.tags = { $in: tags };
    }

    const media: WithId<MediaItem>[] = await collection
      .find(query)
      .sort({ date: -1 })
      .toArray();

    return NextResponse.json(media);
  } catch (err) {
    console.error('GET /api/media error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * Suggested index (Mongo shell):
 * db.media.createIndex({ type: 1, "tags": 1, date: -1 })
 */


/*
import { NextResponse, NextRequest } from 'next/server';
import { connectToDb } from '../db';

const GROUPS = {
  read: ['read'],
  av: ['watch', 'listen'],
} as const;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const raw = searchParams.get('types') ?? searchParams.get('type') ?? '';
    const types =
      raw
        .split(',')
        .map(s => s.trim().toLowerCase())
        .filter(Boolean);

    const group = (searchParams.get('group') ?? '').toLowerCase() as keyof typeof GROUPS | '';
    const formatList = group ? GROUPS[group] : types;

    if (group && !GROUPS[group]) {
      return NextResponse.json({ error: `Unknown group: ${group}` }, { status: 400 });
    }

    if (!formatList?.length) {
      return NextResponse.json({ error: 'No types provided' }, { status: 400 });
    }

    const { db } = await connectToDb();

    const media = await db
      .collection('media')
      .find({ type: { $in: formatList } })
      .sort({ date: -1 }) // server-side sort by newest
      .toArray();

    return NextResponse.json(media, { status: 200 });
  } catch (err: any) {
    console.error('GET /api/media error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}



 import { connectToDb } from '../db';

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    const { db } = await connectToDb();

    const query = type ? { type } : {};

    const media = await db.collection('media').find(query).toArray();

    return new Response(JSON.stringify(media), {
        status: 200,
        headers: {
            'Content-Type' : 'application/json'
        }
    })

}
 */