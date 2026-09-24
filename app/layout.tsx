import "./globals.css";
export const metadata={title:"Le Romarin AI",description:"Ton professeur intelligent de français"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}