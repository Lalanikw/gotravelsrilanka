import ContactForm from "../../components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat p-2"
      style={{ background: "url('/habarana_ele.JPG')" }}>
    <div className="p-4 max-w-3xl mx-auto bg-slate-200 mb-1 mt-1"
    >
      
      <h1 className="p-1 text-3xl font-bold text-center">Contact Us</h1>
      <p className="pl-4 text-center text-blue-950"> Your thoughts are the compass guiding our journey. Share your experiences, inquiries, or
          simply say hello - we`d love to hear from you.
          <br></br> <br></br>&#127802; <br></br>
          Reach out through our Contact Us page and let the conversation begin. </p>
      <ContactForm />
      </div>
      </div>
  );
}

