export interface TestimonialsStateType {
    testimonials: Testimonial[]
}

export interface Testimonial {
    img: string;
    content?: string;
    author?: string;
    jobPosition?: string;
}