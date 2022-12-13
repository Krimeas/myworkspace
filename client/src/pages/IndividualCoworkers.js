// import IndividualCoworkers from '../components/IndividualCoworkers';

// import React from 'react';

// // Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
// import { useQuery } from ' ';

// import MyProjects from '../components/MyMessageList';
// import CommentForm from '../components/MyProjects';

// import { QUERY_PROJECTS } from '../utils/queries';

// const IndividualCoworkers = () => {
//   // Use `useParams()` to retrieve value of the route parameter `:profileId`
//   const { IndividualCoworkers } = useParams();

//   const { loading, data } = useQuery(IndividualCoworkers, {
//     // pass URL parameter
//     variables: { IndividualCoworkers: IndividualCoworkers },
//   });

//   const IndividualCoworkers = data?.IndividualCoworkers || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="my-3">
//       <h3 className="card-header bg-dark text-light p-2 m-0">
//         {IndividualCoworkers.Coworkername} <br />
//         <span style={{ fontSize: '1rem' }}>
//           coworker name {IndividualCoworkers.createdAt}
//         </span>
//       </h3>
//       <div className="bg-light py-4">
//         <blockquote
//           className="p-4"
//           style={{
//             fontSize: '1.5rem',
//             fontStyle: 'italic',
//             border: '2px dotted #1a1a1a',
//             lineHeight: '1.5',
//           }}
//         >
//           {thought.thoughtText}
//         </blockquote>
//       </div>

//       <div className="my-5">
//         <CommentList comments={IndividualCoworkers.Coworkername} />
//       </div>
//       <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//         <CommentForm thoughtId={thought._id} />
//       </div>
//     </div>
//   );
// };

// export default IndividualCoworkers;
