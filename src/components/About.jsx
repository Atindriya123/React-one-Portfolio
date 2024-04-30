import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b 
    from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" >
          <p className="text-4xl font-bold inline border-b-4
          border-gray-500">About</p>
        </div>
        <p className="text-xl text-white ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          voluptatem consequuntur delectus error dolorum est quidem officia.
          Maxime porro, et veritatis aperiam obcaecati voluptatem tempore
          aliquam ad vitae possimus vero quia rem commodi minus doloremque
          magnam. Dignissimos exercitationem ipsam omnis fugiat inventore,
          deleniti quo possimus architecto, sunt tempore tempora consequatur.
        </p>
        <br/>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Minus quam molestias 
           facilis eveniet odit soluta. Aut eum 
           totam aspernatur architecto error 
           nostrum ducimus molestiae numquam 
           quae quidem nesciunt laudantium soluta, 
           eligendi esse! Porro consequatur, 
           perferendis repellendus doloremque 
           ratione autem expedita inventore qui 
           voluptate tenetur laboriosam dicta, 
          asperiores rerum sit natus.
        </p>
      </div>
    </div>
  );
};

export default About;
