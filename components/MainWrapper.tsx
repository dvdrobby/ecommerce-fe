export default function MainWrapper({children}: {children:React.ReactNode}){
    return (
        <main className="flex justify-center items-center min-h-screen">{children}</main>
    )
}