let projects = [
    {
        title: "Figma clone",
        description: "Our Figma Clone is a powerful and intuitive web-based design tool, replicating the core functionalities of Figma. Designed for modern collaboration, it allows users to create, edit, and share vector graphics, wireframes, and user interface designs seamlessly. ",
        demo:"https://shadanshakil.github.io/css-5/" ,
        code:"https://github.com/ShadanShakil/css-5",
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlnbWF8ZW58MHx8MHx8fDA%3D"
    },

    {
        title: "Pepsi clone",
        description:"Our Pepsi Clone is a refreshing and meticulously crafted beverage that mirrors the iconic taste and effervescence of Pepsi. Developed with a perfect blend of flavors, it offers the same crisp and invigorating experience that Pepsi lovers have cherished for decades.",
        demo:"https://shadanshakil.github.io/css-6/",
        code: "https://github.com/ShadanShakil/css-6",
        img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwc2l8ZW58MHx8MHx8fDA%3D"
    },

    {
        title: "Booking.com clone",
        description: "Our Booking.com Clone is a comprehensive online travel booking platform designed to make finding and reserving accommodations effortless and convenient.Offering a wide range of hotels, vacation rentals, and other lodging options, it caters to travelers seeking the best deals and most suitable stays.",
        demo: "https://shadanshakil.github.io/css-7/",
        code: "https://github.com/ShadanShakil/css-7",
        img: "https://images.unsplash.com/photo-1695742265305-14f0373cd9dc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      title: "Youtube clone",
      description: "Our YouTube Clone is a dynamic video-sharing platform designed to emulate the core functionalities of YouTube. It allows users to upload, view, share, and comment on videos across a wide range of categories. ",
      demo: "https://shadanshakil.github.io/project-1/",
      code: "https://github.com/ShadanShakil/project-1",
      img: "https://images.unsplash.com/photo-1521302200778-33500795e128?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

let assignments = document.getElementById("all-assignments");
for(i=0; i<projects.length; i++){
    let div = `<div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src=${projects[i].img}
      alt="Placeholder Image"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-2">${projects[i].title}</h2>
      <p class="text-gray-700">
        ${projects[i].description}
      </p>
      <a href=${projects[i].code} target="_blank"><button
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Code
      </button></a>
      <a href=${projects[i].demo} target="_blank"><button
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Demo
      </button></a>
    </div>
  </div>`
  assignments.innerHTML+= div;
}