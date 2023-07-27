import img1 from "../../../assets/Gallery/img1.jpg"
import img2 from "../../../assets/Gallery/img2.jpg"
import img3 from "../../../assets/Gallery/img3.jpg"
import img4 from "../../../assets/Gallery/img4.jpg"
import img5 from "../../../assets/Gallery/img5.jpg"
import img6 from "../../../assets/Gallery/img6.jpg"
import img7 from "../../../assets/Gallery/img7.jpg"
import img8 from "../../../assets/Gallery/img8.jpg"
import img9 from "../../../assets/Gallery/img9.jpg"
import img10 from "../../../assets/Gallery/img10.jpg"
import img11 from "../../../assets/Gallery/img11.jpg"
import img12 from "../../../assets/Gallery/img12.jpg"
import img13 from "../../../assets/Gallery/img13.jpg"
import img14 from "../../../assets/Gallery/img14.jpg"
import img15 from "../../../assets/Gallery/img15.jpg"
import img16 from "../../../assets/Gallery/img16.jpg"
import img17 from "../../../assets/Gallery/img17.jpg"
import img18 from "../../../assets/Gallery/img18.jpg"
import img19 from "../../../assets/Gallery/img19.jpg"
import img20 from "../../../assets/Gallery/img20.jpg"
import img21 from "../../../assets/Gallery/img21.jpg"
import img22 from "../../../assets/Gallery/img22.jpg"
import img23 from "../../../assets/Gallery/img23.jpg"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import HeaderTitle from "../../Shared/HeaderTitle/HeaderTitle"
const Gallery = () => {
    const images = [
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img21,img22
    ]

    console.log(images)

    return (
        <div className="my-10">
        
        <HeaderTitle title="Explore Our Gallery"></HeaderTitle>

        <ResponsiveMasonry className="mt-5" columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry
            style={{ gap: "15px" }} // Add the gap value in pixels (adjust it as needed)
          >
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="my-2 rounded-xl"
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      
    );
};

export default Gallery;