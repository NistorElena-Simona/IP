import Image from "next/image";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
//import sample_image from "./sample_image.jpg";
export default function Home() {
  return (
    <><div className="flex min-h-screen">
      {/* Left Panel with Login Form */}
      <div className="w-1/3 bg-blue-200 flex items-center justify-center p-8">
        <Login />
      </div>

      {/* Right Panel with Image */}
      <div className="w-2/3 bg-gray-100  flex items-center justify-center p-8">
        {/* Reference the image from the 'public' folder */}
        <Image
          src="/sample_image.jpg" // Path to image in public folder
          alt="Sample Image"
          layout="intrinsic"
          width={500}
          height={600}
          className="rounded-lg" />


      </div>

    </div><Dashboard /></>

  );
}
