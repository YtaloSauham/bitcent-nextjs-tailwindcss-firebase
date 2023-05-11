interface LayoutProps {
    children: any
    className?: string
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex justify-center w-full
            ${props.className ?? ''}
        `}>
            <div className={`
                px-7 xl:px-0 
                w-full xl:w-[1200px]
            `}>
                {props.children}
            </div>
        </div>
    )
}