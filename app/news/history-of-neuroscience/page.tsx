import PdfIframe from "@/app/components/PdfIframe";

export default function HistoryPage() {
    return (
        <main className="p-4 bg-lightText min-h-screen">
            <h1 className="max-w-4xl mx-auto mt-12 text-3xl font-bold text-dark">
                Lecture: History of Neuroscience
            </h1>

            <div className="max-w-4xl mx-auto mt-12">
                <PdfIframe file="/documents/History-of-NS_Nov2025.pdf" height="90vh" />
            </div>
        </main>
    );
}
