from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from flask_cors import CORS
import os
from dotenv import load_dotenv  # Import the load_dotenv function

load_dotenv()


app = Flask(__name__)
CORS(app)

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        sender_email = os.environ.get("EMAIL_USER")
        sender_password = os.environ.get("EMAIL_PASSWORD")
        receiver_email = "oyarekhuatomisin@gmail.com"

        msg = MIMEText(f"Name: {name}\nEmail: {email}\nMessage: {message}")
        msg['Subject'] = "New Contact Form Submission"
        msg['From'] = sender_email
        msg['To'] = receiver_email

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
          
            server.login(sender_email, sender_password)
            server.send_message(msg)

        return jsonify({'message': 'Email sent successfully'}), 200

    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({'error': 'Failed to send email'}), 500

if __name__ == '__main__':
    app.run(debug=True) # Set debug=False in production