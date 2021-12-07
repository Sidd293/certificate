import React from "react";
import Link from "next/link";

const CoursesCurriculum = ({ videos }) => {
  // console.log('Videos')
//   console.log(videos);

  const sorted = [...videos];

  const sortedVideos = sorted.sort((a, b) => {
    if (a.order > b.order) return 1;
    if (a.order < b.order) return -1;
    return 0;
  });

//   console.log(sortedVideos);
  return (
    <div className="courses-curriculum">
      {sortedVideos && sortedVideos.length ? (
        <ul>
          {sortedVideos.map((video) => (
            <li key={video.order}>
              {/* <Link href="/courses"> */}
              <a
                className="d-flex justify-content-between align-items-center"
                onClick={(e) => e.preventDefault()}
              >
                <span className="courses-name">{video.name}</span>
                <span className="courses-name">{video.description}</span>

                {/* <div className="courses-meta">
                                        <span className="status locked"><i className="flaticon-password"></i></span>
                                    </div> */}
              </a>
              {/* </Link> */}
            </li>
          ))}
        </ul>
      ) : (
        <h3>Coming Soon ...</h3>
      )}
    </div>
  );
};

export default CoursesCurriculum;
