import AudioUpload from "@/components/inputFile"
import PageLayout from "@/components/PageLayout"
import GlassCard from "@/components/GlassCard"

export default function UploadPage() {
    return(
        <PageLayout title="Upload">
            <div className="max-w-4xl mx-auto">
                <GlassCard>
                    <AudioUpload />
                </GlassCard>
            </div>
        </PageLayout>
    )
}