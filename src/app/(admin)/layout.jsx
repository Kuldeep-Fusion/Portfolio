import Sidebar from "../components/sidebar";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex h-screen ">
          <div className=' w-[20%] m-4'><Sidebar/></div>
          <div className=' w-[80%] m-4'>{children}</div>
        </div>
      </body>
    </html>
  );
}
