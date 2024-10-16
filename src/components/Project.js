// import React from "react";
// import project from "./data/projects.json";

// const Project = () => {
//   return (
//     <>
//       <div className="container project " id="projects">
//         <h1>PROJECTS</h1>
//         <div className="row justify-content-center d-flex align-content-center">
//           {project.map((data) => {
//             return (
//               <div
//                 key={data.id}
//                 className="my-4 col-md-4 col-lg-3 col-sm-6 mx-4"
//               >
//                 <div
//                   className="card bg-dark text-light"
//                   style={{
//                     width: "18rem",
//                     border: "1.5px solid yellow",
//                     boxShadow: "4px 4px 12px 8px rgba(48, 133, 23, 0.966)",
//                   }}
//                   data-aos="flip-right"
//                   data-aos-duration="1000"
//                 >
//                   <div className="img justify-content-center d-flex align-content-center p-3">
//                     <img
//                       src={data.imageSrc}
//                       className="card-img-top"
//                       alt={data.title}
//                       style={{
//                         width: "250px",
//                         height: "200px",
//                         border: "1.5px solid yellow",
//                         borderRadius: "10px",
//                       }}
//                     />
//                   </div>

//                   <div className="card-body text-center">
//                     <h5 className="card-title">{data.title}</h5>
//                     <p className="card-text">{data.description}</p>
//                     <a href={data.demo} className="btn btn-primary  mx-4">
//                       Demo
//                     </a>
//                     <a href={data.source} className="btn btn-warning ">
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Project;
