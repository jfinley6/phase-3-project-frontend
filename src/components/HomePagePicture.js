import React from 'react'
import Table from './Table';

function HomePagePicture({user, sinatraUser, setSinatraUser}) {
  return (
    <div className="homePagePicture">
      <img
        className="rounded-2xl"
        src="images/how-to-play-blackjack-lead.jpeg"
        alt=""
        style={{ height: "75vh", width: "90vw" }}
      />
      <Table user={user} sinatraUser={sinatraUser} setSinatraUser={setSinatraUser}/>
    </div>
  );
}

export default HomePagePicture