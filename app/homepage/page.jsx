"use client";
import styles from "./page.module.css"
import Image from 'next/image';

export default function Home() {
  return (
  <div>
    <div className={styles.container}>
      <h1>Responsive Image in Next.js</h1>
      <div className={styles.imageContainer}>
        <Image
          src="/Images/family-pic.png" // Path to your image (place it in the 'public' folder)
          alt="Family Picture"
          width={1200} // Set the width for desktop
          height={800} // Set the height for desktop
          layout="intrinsic" // Layout type, use "intrinsic" to maintain aspect ratio
          sizes="(max-width: 768px) 100vw, 1200px" // Responsive sizes for mobile vs desktop
        />
      </div>
    </div>
    {/* <div id= "home" className="home-page-text bg-gray-50 shadow-2xl rounded-3xl p-9 border-gray-700 in-left"  style={{ margin: '-120pt 200pt', position: 'absolute'}}>
      <h1 className="text-3xl text-gray-200 font-bold mb-5">Welcome to Full Life Centre Assembly of God Church (FLAG)!</h1>
      <p className="text-lg text-gray-100">Welcome to Full Life Centre (FLAG)
        We’re so glad you’re here! Whether you're exploring faith, seeking a spiritual home, or just visiting—welcome to a place where faith, family, and purpose come alive.
        At FLAG, we’re passionate about sharing the Full Gospel in Thiruverkadu and beyond. Our mission is to help people grow in Christ, build strong families, and live out their God-given purpose.
        Join us as we pursue God’s heart, grow together in faith, and experience the life-transforming power of Jesus.
        Welcome to the Full Life Family. There's a place for you here.
      </p>
    </div> */}
  </div>
    
  );
}
