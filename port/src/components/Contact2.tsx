import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState(""); // For feedback messages

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitMessage(""); // Clear previous messages

    try {
      const response = await fetch(
        "https://email-api-dljj.onrender.com/send_email",
        {
          // Or your full URL in production
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully");
        setFormData({ name: "", email: "", message: "" });
        setSubmitMessage("Message sent successfully!"); // Display success message
      } else {
        console.error("Error sending email:", data.error || "Server error"); // More robust error handling
        setSubmitMessage(
          `Error sending message: ${data.error || "Server error"}`
        ); // Display error message
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage("An unexpected error occurred."); // Display generic error message
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-text dark:text-white">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto bg-background dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-light dark:text-gray-300 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-text dark:text-white bg-white dark:bg-gray-800 border border-gray-600 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-text-light dark:text-gray-300 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-text dark:text-white bg-white dark:bg-gray-800 border border-gray-600 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-text-light dark:text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                style={{ resize: "none" }}
                className="w-full px-4 py-2 text-text dark:text-white bg-white dark:bg-gray-800 border border-gray-600 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-secondary transition duration-300 flex items-center justify-center hover:bg-green-600"
            >
              Send Message
              <Send className="ml-2" size={20} />
            </button>
            {submitMessage && (
              <p className="mt-2 text-center">{submitMessage}</p>
            )}{" "}
            {/* Feedback message */}
          </form>
        </div>
      </div>
    </section>
  );
}
