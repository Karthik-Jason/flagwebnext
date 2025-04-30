"use client";

import React, { useState } from "react";
import "./page.css";
import PastorsModal from "../components/PastorsModal";
// import Image from "next/image";
// import logo from '../assets/family-pic-2.jpg'

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("ourChurch");

  return (
      <div id="about-us" className="mt-36">
        <h1 className="about-us-card text-6xl font-bold text-center mb-8 text-white p-10 shadow-lg">ABOUT US</h1>

        {/* Buttons to switch sections */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6 mx-5 md:mx-0">
          <button id= "subtabs"
            onClick={() => setActiveSection("ourChurch")}
            className={`px-4 py-2 font-semibold rounded ${
              activeSection === "ourChurch" ? "text-2xl font-semibold  bg-gray-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            Our Church
          </button>
          <button id= "subtabs"
            onClick={() => setActiveSection("seniorPastor")}
            className={`px-4 py-2 font-semibold rounded ${
              activeSection === "seniorPastor" ? "text-2xl font-semibold  bg-gray-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            Senior Pastor
          </button>
          <button id= "subtabs"
            onClick={() => setActiveSection("pastoralTeam")}
            className={`px-4 py-2 font-semibold rounded ${
              activeSection === "pastoralTeam" ? "text-2xl font-semibold  bg-gray-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            Pastoral Team
          </button>
        </div>

        {/* Our Church Section */}
        {activeSection === "ourChurch" && (
          <section className="fade-in mb-8 mx-5 md:mx-24 pb-5">
            <h2 className="text-4xl font-semibold mb-4 text-white">History</h2>
            <p className="text-lg mb-6 font-bold text-white">
            Thiruverkadu, a well-known pilgrimage center for the people of Chennai, is a rapidly growing village located 15 km
            from the city. No matter which direction you turn, you will find beautiful temples, both large and small. However, churches are a rare 
            sight in this area. With a deep burden for this region, Rev. D. Mohan, Chief Pastor of New Life A.G. Church and General Superintendent
            of the All India Assemblies of God, sent Pr. N. Johnson to pioneer a church in Thiruverkadu in October 1998.
            </p>
            <p className="text-lg mb-6 font-bold text-white">
            The task was anything but easy. With nearly 99% of the population being Hindus, most of whom were slum dwellers bound by sin, sickness,
            and spiritual oppression, opposition was inevitable. The first Sunday service was held in a rented house on November 7, 1998, with just
            two people in attendance.
            </p>
            <p className="text-lg mb-6 font-bold text-white">
            Pr. Johnson faced intense resistance from the neighborhood, and some even threatened to take his life. Yet, amid these trials and 
            tribulations, God began to move. Within a year, the small house church could no longer accommodate the growing congregation, which 
            had increased to about 30 people. Finding a new place for worship became a challenge, as many doors were closed to Christians. 
            However, after much prayer and effort, the church moved to a rented thatched shed in the year 2000. Within two years, the congregation
            grew to around 120 members by the grace of God.
            </p>
            <p className="text-lg mb-6 font-bold text-white">
            In 2003, God enabled FLAG to purchase a piece of land and build a hall with a light roof Shed. The congregation doubled once again, 
            leading to the introduction of two services. However, on December 23, 2005, the building was demolished due to a government scheme, 
            and the church’s land was merged with the river. Yet, the Lord remained faithful. Miraculously, He provided the means to purchase 
            new land, and on May 8, 2008, the present church building was dedicated. Since then, the congregation has continued to grow, and a 
            third service was added. Today, the church actively serves Thiruverkadu and its surrounding areas. By God's grace, 12 branch churches 
            and two house churches are now functioning, and seven missionaries are supported financially every month. Currently, the church has 
            around 1,000 active members. Indeed, God is faithful!
            </p>
          </section>
        )}

        {/* Senior Pastor Section */}
        {activeSection === "seniorPastor" && (
          <section className="fade-in mb-8 mx-5 md:mx-24 pb-5">
            <h2 className="text-4xl font-semibold mb-4 text-white">Our Senior Pastor – Rev. N. Johnson</h2>
            <p className="text-lg mb-6 font-bold text-white">
            Rev. N. Johnson’s life is a powerful testimony of God’s grace and transformation. Born and raised in a Hindu family in a small village in India, young Johnson had an intense longing to see and know God—even at the age of 13. He spent hours in a local library, reading Hindu legends in search of divine truth. However, the more he read, the more he realized that these stories were mere myths, leading him to question his beliefs.
            </p>
            
            <p className="text-lg mb-6 font-bold text-white">
            Disillusioned, he turned to atheism and drifted into a life of sin. Yet, despite his attempts to find satisfaction, his heart remained empty, and his mind was tormented by fear of the future. It was during this season of searching that a family friend invited him to a Christmas service in a nearby town. Though hesitant, Johnson attended—and that decision changed his life forever. That day, the Lord touched him, transformed his heart, and filled him with His peace. On September 3, 1989, Johnson accepted Jesus Christ as his Savior and was baptized.
            </p>
            
            <p className="text-lg mb-6 font-bold text-white">
            He later began working as a machine operator at a granite company. One evening, as he was praying, he had a divine encounter. The Lord spoke to him, saying, "You have only one life, and it passes away like a tale that is told. Spend it in My service, and I will give you an eternal crown." Overwhelmed by God’s call, Johnson surrendered his life to ministry, resigning from his job to pursue theological studies. In 1994, he joined Southern Asia Bible College in Bangalore and, in 1997, graduated with a Bachelor of Theology degree. He then served under Rev. Jaipal (Living Gospel Fellowship, Bangalore) and Rev. John Jebaraj (Praise Assembly, Chennai), gaining valuable ministry experience.
            </p>
            <p className="text-lg mb-6 font-bold text-white">
            In 1998, Johnson married Jemimah, and soon after, they moved to Thiruverkadu to pioneer a church. Through their unwavering faith and commitment, God blessed their ministry abundantly. Their family also grew, with the birth of their son, Jerry Jemson, and daughter, Jerusha Pearlin.
            </p>
            <p className="text-lg mb-6 font-bold text-white">
            Today, Rev. N. Johnson holds a Master’s in Theology and is pursuing his Doctorate. God is using him mightily, and his life and ministry continue to impact and bless countless people in Thiruverkadu and beyond. His story stands as a testament to the faithfulness of God and the power of a life fully surrendered to His call.
            </p>
          </section>
        )}

        {/* Pastoral Team Section */}
        {activeSection === "pastoralTeam" && (
          <section className="fade-in mb-8 mx-5 md:mx-24 pb-5">
            <h2 className="text-4xl font-semibold mt-6 mb-4 ml-5 text-white">Our Pastors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Rev. N. Johnson & Pastor Jemimah Johnson",
                  role: "Senior Pastor",
                  description:
                    "Rev. N. Johnson serves as the Senior Pastor of Full Life Centre A.G. Church (FLAG), leading with a heart full of passion for God’s kingdom. With unwavering faith and dedication, he has been instrumental in pioneering and establishing the church, impacting countless lives in Thiruverkadu and beyond. He is joined in ministry by his wife, Pastor Jemimah Johnson, who stands as a pillar of strength and support. Together, they serve with a shared vision to see people experience the fullness of life in Christ through the power of the Gospel, prayer, and discipleship. God has blessed their family with two wonderful children, Pastor Jerry Jemson and Jerusha Pearlin, both of whom actively serve in the ministry. Their lives and leadership continue to inspire and transform lives for the glory of God.",
                },
                {
                  name: "Pastor Jerry Jemson & Vimisha Jemson",
                  role: "Associate Pastor",
                  description:
                    "Pr. Jerry Jemson serves as the Associate Pastor at FLAG, leading the Youth, Children, Media, and Worship ministries. With a deep passion for the Gospel and a heart for the next generation, he is committed to equipping and empowering young people to grow in their faith and walk in God’s purpose. Pr. Jerry carries a God-given vision to take the Gospel to the remote parts of India, reaching the unreached with the love and truth of Christ. His leadership and dedication continue to impact lives both within the church and beyond. He is married to Vimisha Jemson, who stands alongside him in ministry. Together, they serve with faith, love, and a desire to see God's kingdom expand.",
                },
                {
                  name: "Pastor Manivannan & Rachel",
                  role: "Branch Pastor – Jeevan A.G. Church, Morai",
                  description:
                    "Rev. Manivannan serves as the Pastor of Jeevan A.G. Church in Morai, faithfully leading the congregation with a heart for God and a passion for souls. His commitment to preaching the Gospel and shepherding God’s people has been a great blessing to the Morai community. He is supported in ministry by his wife, Rachel, who stands alongside him. God has blessed them with two wonderful children, Sam & Asha, and their family continues to be a testimony of God’s grace and faithfulness.",
                },
                {
                  name: "Pastor Balaji & Rebecca",
                  role: "Branch Pastor – Full Life A.G. Church, Alamathi",
                  description:
                    "Rev. Balaji serves as the Pastor of Full Life A.G. Church in Alamathi, with a special focus on ministering to the Gypsy community. His heart for the marginalized and his dedication to spreading the love of Christ have made a significant impact in the region. He is joined in ministry by his wife, Rebecca, who faithfully supports and serves alongside him. Together, they are committed to bringing hope, transformation, and the Gospel to those in need. God has blessed them with two wonderful children, Moses & Aaron, and their family continues to be a testimony of God’s grace and faithfulness in the Alamathi community.",
                },
                {
                  name: "Pastor Sundar & Brindha",
                  role: "Branch Pastor – Blessing A.G. Church, Thiruthani",
                  description:
                    "Rev. Sundar serves as the Pastor of Blessing A.G. Church in Thiruthani, faithfully leading the congregation with a heart for God and a passion for seeing lives transformed through the Gospel. His commitment to ministry has been a great blessing to the Thiruthani community. He is joined in ministry by his wife, Brindha, who stands alongside him with dedication and faith. Together, they serve with a vision to bring hope, healing, and the love of Christ to the people of Thiruthani. God has blessed them with two wonderful children, Santhosh & Abinaya, and they continue to be a testimony of God’s grace and faithfulness.",
                },
                {
                  name: "Pastor Royes & Theboral",
                  role: "Branch Pastor – Almighty A.G. Prayer House, Kallikuppam",
                  description:
                    "Pastor Royes serves as the Pastor of Almighty A.G. Prayer House in Kallikuppam, leading the congregation with a deep commitment to prayer, worship, and the Word of God. His passion for ministry and dedication to serving the community have been a great blessing to many. He is joined in ministry by his wife, Theboral, who faithfully supports and serves alongside him. Together, they are committed to sharing the love, grace, and power of Christ with those around them. God has blessed them with a wonderful son, Jonah, and their family continues to be a testimony of God’s faithfulness and goodness in Kallikuppam.",
                },
                {
                  name: "Pastor Solomon & Clara",
                  role: "Branch Pastor – A.G. Prayer House, Nemilichery",
                  description:
                    "Pastor Solomon serves as the Pastor of A.G. Prayer House in Nemilichery, faithfully leading the congregation with a passion for prayer, discipleship, and the Word of God. His dedication to ministry and heart for people have been a great blessing to the Nemilichery community. He is joined in ministry by his wife, Clara, who stands alongside him with unwavering faith and support. Together, they are committed to sharing the love of Christ, strengthening families, and building a strong spiritual foundation in their community. God has blessed them with two wonderful children, Ryan Marcus & Sherin Blessy, and their family continues to be a testimony of God’s grace and faithfulness.",
                },
                {
                  name: "Pastor Thomai Rajan & Meksha",
                  role: "Branch Pastor – Kirubai A.G. Prayer House, Mangadu",
                  description:
                    "With a deep passion for prayer and intercession, Pastor Thomai Rajan leads Kirubai A.G. Prayer House in Mangadu, a church that has become a beacon of hope for those seeking healing and restoration. His ministry is marked by compassion and a heart for the broken, reaching people who are struggling with life's challenges and leading them into a closer relationship with Christ. Alongside him, his wife Meksha plays a vital role in supporting women and families within the church, encouraging them to grow in faith and stand firm in God’s promises. Together, they are committed to building a strong, prayer-centered community that experiences God’s power and presence. God has blessed them with two wonderful daughters, Sweety & Christy, who are growing in the faith and actively involved in the church. Through their ministry, many lives have been touched, and the work of God continues to flourish in Mangadu.",
                },
                {
                  name: "Pastor Chiranjeevi & Sunitha",
                  role: "House Church Pastor – Avadi",
                  description:
                    "Pastor Chiranjeevi leads the Avadi House Church, a place where believers experience intimate fellowship, deep discipleship, and Spirit-led worship. His ministry focuses on building strong, faith-filled families and nurturing new believers in their walk with Christ. Despite the challenges of leading a house church, his dedication has helped many grow in faith and experience God’s presence in a personal way. His wife, Sunitha, stands beside him as a strong support, ministering to women and families within the church. Her heart for hospitality and counseling has made their home a haven of prayer, encouragement, and transformation. God has blessed them with three wonderful children – Gladys Chiranthana, Isaac Gladson, and Jessica Angelina. As a family, they continue to be a testimony of God’s provision and faithfulness, reaching people in Avadi with love, care, and the life-changing power of the Gospel.",
                },
                {
                  name: "Pastor Nagaraj & Rasathi",
                  role: "House Church Pastor – Kannapalayam",
                  description:
                    "Pastor Nagaraj leads the Kannapalayam House Church, a thriving home fellowship where people gather to worship, pray, and grow in God’s Word. His ministry is deeply rooted in personal discipleship and community outreach, reaching families and individuals who might not otherwise step into a traditional church setting. Through his faithfulness and perseverance, many in Kannapalayam have come to know Christ and experience His transforming power. His wife, Rasathi, plays a crucial role in ministering to women and families, offering encouragement, prayer, and support to those in need. Together, they have created a warm and welcoming space where people find spiritual growth, healing, and restoration. God has blessed them with two wonderful children, Nishanth & Niha. Their passion for the Gospel and commitment to serving the community continue to impact lives, making a lasting difference in Kannapalayam.",
                },
                {
                  name: "Pastor Daniel Vinayagam & Shanthi",
                  role: "Evangelist",
                  description:
                    "Evangelist Daniel Vinayagam is a passionate and dedicated servant of God, traveling in and around Chennai to share the Gospel and bring souls to Christ. His ministry is marked by a deep burden for the lost, bold evangelism, and unwavering faith. Whether preaching in open-air meetings, ministering in churches, or reaching out to those in spiritual need, his heart burns for revival and transformation. His wife, Shanthi, stands as a strong pillar of support, actively encouraging and praying for the ministry. Together, they have faithfully served God, witnessing lives changed, hearts healed, and communities impacted by the power of the Gospel. God has blessed them with two sons, Mahesh & Karthick, who, along with their spouses, are actively involved in the church, carrying forward the legacy of faith and service. Their family remains a testimony of God’s grace, dedication, and the unstoppable power of the Gospel.",
                },
                {
                  name: "Pastor Joshua & Shalomi",
                  role: "Iyyappanthangal",
                  description:
                    "Evangelist Daniel Vinayagam is a passionate and dedicated servant of God, traveling in and around Chennai to share the Gospel and bring souls to Christ. His ministry is marked by a deep burden for the lost, bold evangelism, and unwavering faith. Whether preaching in open-air meetings, ministering in churches, or reaching out to those in spiritual need, his heart burns for revival and transformation. His wife, Shanthi, stands as a strong pillar of support, actively encouraging and praying for the ministry. Together, they have faithfully served God, witnessing lives changed, hearts healed, and communities impacted by the power of the Gospel. God has blessed them with two sons, Mahesh & Karthick, who, along with their spouses, are actively involved in the church, carrying forward the legacy of faith and service. Their family remains a testimony of God’s grace, dedication, and the unstoppable power of the Gospel.",
                },
                {
                  name: "Pastor Sathyamoorthy & Nila",
                  role: "Kanchipuram",
                  description:
                    "Evangelist Daniel Vinayagam is a passionate and dedicated servant of God, traveling in and around Chennai to share the Gospel and bring souls to Christ. His ministry is marked by a deep burden for the lost, bold evangelism, and unwavering faith. Whether preaching in open-air meetings, ministering in churches, or reaching out to those in spiritual need, his heart burns for revival and transformation. His wife, Shanthi, stands as a strong pillar of support, actively encouraging and praying for the ministry. Together, they have faithfully served God, witnessing lives changed, hearts healed, and communities impacted by the power of the Gospel. God has blessed them with two sons, Mahesh & Karthick, who, along with their spouses, are actively involved in the church, carrying forward the legacy of faith and service. Their family remains a testimony of God’s grace, dedication, and the unstoppable power of the Gospel.",
                }
              ].map((pastor, index) => (
              <div key={index} className="container">
                <div id="pastors-details" className="card">
                  <div className="face face1">
                    <div className="content">
                      {/* <p>{pastor.description}</p> */}
                      <PastorsModal name={pastor.name} role={pastor.role} description={pastor.description} imageIndex={index + 1}/>
                    </div>
                  </div>
                  <div className="face face2">
                  <h2>{pastor.name}</h2>
                  <h5>{pastor.role}</h5>
                </div>
                </div>
              </div>
              ))}
            </div>
          </section>
        )}
      </div>
  );
};

export default AboutUs;