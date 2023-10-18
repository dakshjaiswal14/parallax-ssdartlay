import "../styles/services.css";
import { Slideshow } from "./Slideshow";
import img11 from "../assets/img/art/Services/portraits/1.jpg";
import img12 from "../assets/img/art/Services/portraits/2.jpg";
import img13 from "../assets/img/art/Services/portraits/3.jpg";
import img14 from "../assets/img/art/Services/portraits/4.jpg";
import img15 from "../assets/img/art/Services/portraits/5.jpg";
import img16 from "../assets/img/art/Services/portraits/6.jpg";

import img21 from "../assets/img/art/Services/sketches/1.jpg";
import img22 from "../assets/img/art/Services/sketches/2.jpg";
import img23 from "../assets/img/art/Services/sketches/3.jpg";
import img24 from "../assets/img/art/Services/sketches/4.jpg";
import img25 from "../assets/img/art/Services/sketches/5.jpg";

import img31 from "../assets/img/art/Services/bulk/1.jpg";
import img32 from "../assets/img/art/Services/bulk/2.JPG";
import img33 from "../assets/img/art/Services/bulk/3.jpg";
import img34 from "../assets/img/art/Services/bulk/4.jpg";

const images1 = [img11, img12, img13, img14, img15, img16];
const images2 = [img21, img22, img23, img24, img25];
const images3 = [img31, img32, img33, img34];

export default function Services() {
  return (
    <div className="services">
      <div className="heading">
        <h1>Our Services</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 card">
          <div className="smol c1"></div>
          <h2 className="fw-normal">Personal Portraits</h2>
          <p>
            "Unveil Your Inner Essence: Personal Portraits that Tell Your Unique
            Story, One Brushstroke at a Time."
          </p>
        </div>
        <div className="col-lg-3 card">
          <div className="smol c2"></div>
          <h2 className="fw-normal">Custom Sketches</h2>
          <p>
            "Elevate Your Ideas to Art: Custom Sketches Inspired by Your
            Thoughts, Crafting Vision and Imagination into Tangible
            Masterpieces."
          </p>
        </div>
        <div className="col-lg-3 card">
          <div className="smol c3"></div>
          <h2 className="fw-normal">Bulk Portraits</h2>
          <p>
            "Unlocking Corporate Creativity: Elevate Employee Recognition with
            Bespoke Sketches, Where Art Meets Appreciation."
          </p>
        </div>
      </div>
      {/* making the description */}
      <div class="row featurette">
        <div class="col-md-7">
          <h2
            class="featurette-heading fw-normal lh-1 primary bold"
            style={{ color: "white" }}
          >
            Personal Portraits{" "}
          </h2>
          <p class="cardlead">
            Our personal portraits capture your essence in art. From cherished
            memories to individuality, our handcrafted sketches reveal emotions
            and stories. Specializing in family, solo, and pet portraits, we
            collaborate closely to ensure your vision shines. These timeless
            keepsakes become cherished heirlooms, preserving your story.
            Transform your memories into art today.
          </p>
        </div>
        <div class="col-md-5">
          <Slideshow images={images1}></Slideshow>
        </div>
      </div>
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">Custom Sketches </h2>
          <p class="cardlead">
            Step into a world where ideas find expression in art. Our skilled
            artist specializes in transforming your concepts into captivating
            sketches. Whether it's an ideology, a unique concept, or a personal
            vision, our custom sketches bring your thoughts to life on paper,
            crafting compelling visual representations of your distinctive
            perspective. Discover the art of making your ideas tangible with us.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <Slideshow images={images2}></Slideshow>
        </div>
      </div>
      <div class="row featurette">
        <div class="col-md-7">
          <h2
            class="featurette-heading fw-normal lh-1 primary bold"
            style={{ color: "white" }}
          >
            Bulk Portraits{" "}
          </h2>
          <p class="cardlead">
            In addition to personal portraits and custom sketches, we also
            welcome corporate orders for employee portraits. These thoughtful
            gifts allow companies to express appreciation for their dedicated
            workforce. Our artist crafts professional and personalized portraits
            that convey gratitude and recognition, making each employee feel
            valued. Whether it's an individual portrait or a bulk order for an
            entire team, our artistry adds a unique touch to corporate gifting.
            Contact us to discuss how we can help your company celebrate its
            employees with the gift of art.
          </p>
        </div>
        <div class="col-md-5">
          <Slideshow images={images3}></Slideshow>
        </div>
      </div>
    </div>
  );
}
