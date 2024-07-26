import React from "react";
import img from "../images/photo-1498050108023-c5249f4df085.avif";

const Home = () => {
  return (
    <><style>{`
    body {
      overflow: hidden;
    }
  `}</style>
      <div className="homearea" style={{
        display:"flex",
        justifyContent:"space-between",
      }}>
        <div className="" style={{marginLeft:"3rem",marginTop:"5rem"}}>
          <h1 style={{ fontSize: 90 }}>
            I'm <span style={{ color: "#E36414" }}>Tanmay</span>
          </h1>
          <h2 style={{ fontSize: 50 }}>Web Developer</h2>
          <p className="my-3">
            Hello and welcome! I'm Tanmay Kumar Chaurasia, a passionate web
            developer.
            <br /> With a strong foundation in front-end and back-end
            development, I specialize in <br />
            creating dynamic and user-friendly web experiences. I have extensive{" "}
            <br />
            experience in HTML, CSS, JavaScript, and various front-end
            frameworks such as React. <br />
            On the back end, I'm proficient in Node.js, Express.js, and database
            technologies like MongoDB and SQL.
          </p>
          <a href="/blogs" className="btn btn-sm my-3" style={{backgroundColor:"#E36414",color:"white"}}>Explore Blog</a>
        </div>
        <div style={{ position: "relative", overflow: "hidden", width: "40vw" }}>
          <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            right: 0,
            background: "linear-gradient(to top left, transparent 50%, white 50%)",
            clipPath: "polygon(30% 0, 0% 0, 0 100%)", // Adjust clip path
          }}></div>
          <img src={img} style={{
            height:"70vh",
            width:"100%",
            marginTop:"1rem",
          }} />
        </div>
      </div>
    </>
  );
};

export default Home;
