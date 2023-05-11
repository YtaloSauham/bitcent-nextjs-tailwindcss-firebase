interface PageProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Page(props: PageProps){
    return(
        <div className={`flex flex-col min-h-screen
        bg-gradient-to-r from-zinc-900 via-black ${props.className ?? ''} `}>
            {props.children}
        </div>
    )
}