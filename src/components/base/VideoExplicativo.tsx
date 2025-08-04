'use client'

interface VideoExplicativoProps{
    idVideo: string
    titulo: string
}

export default function VideoExplicativo({idVideo, titulo}: VideoExplicativoProps) {
    return (
        <div className="w-full aspect-video max-w-3xl mx-auto">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${idVideo}`}
                title={`${titulo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}