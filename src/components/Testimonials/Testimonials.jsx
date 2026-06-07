import { ArrowBigLeft, ArrowRight } from "lucide-react";
import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Robert Fox",
      role: "UI/UX Designer",
      image: "/avatars/robert.jpg",
      rating: 5,
      review:
        "“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”",
    },

    {
      id: 2,
      name: "Bessie Cooper",
      role: "Creative Director",
      image: "/avatars/bessie.jpg",
      rating: 5,
      review:
        "“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”",
    },

    {
      id: 3,
      name: "Jane Cooper",
      role: "Photographer",
      image: "/avatars/jane.jpg",
      rating: 5,
      review:
        "“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”",
    },
  ];
  return (
    <section>
      <h2>Clients Testimonials</h2>

      <div>
        <button>
          <ArrowBigLeft size={20} />
        </button>

        <div>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <button>
          <ArrowRight size={20} />
        </button>
      </div>

      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Testimonials;
