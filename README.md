# AskMeAI - Interactive Portfolio

## Overview
This AI-powered chatbot is designed to represent me in my interactive portfolio. It dynamically responds to user questions, providing insights about my skills, projects, and experience as if I were personally answering. Built with OpenAI’s API and embeddings, the chatbot ensures contextual and meaningful interactions.

## Features
- **Conversational AI**: The chatbot mimics my tone and knowledge, answering questions about my background, experience, and projects.
- **Embeddings for Contextual Understanding**: The system uses embeddings to retrieve relevant responses based on user queries.
- **Dynamic Response Generation**: Instead of predefined answers, the chatbot generates responses based on real-time inputs.
- **Seamless Integration**: Designed as part of my portfolio, it provides an interactive way for visitors to learn about me.
- **Cloud-Hosted Backend**: The chatbot runs on a scalable infrastructure using GCP Cloud Run, ensuring reliability and availability.

## Tech Stack
- **Frontend**: React (Next.js) + TypeScript
- **Backend**: NestJS + Knex + PostgreSQL
- **Infrastructure**: GCP Cloud Run + Terraform
- **AI Model**: OpenAI API (GPT-based) with embeddings
- **Cache**: Redis for optimizing response retrieval
- **Authentication**: Nginx for reverse proxy handling auth requests
- **Containerization**: Docker for deployment and service management

## How It Works
1. **User Interaction**: Visitors can ask the chatbot anything about my experience, skills, or projects.
2. **Query Processing**: The input is processed using embeddings to retrieve relevant context.
3. **AI Response Generation**: The chatbot formulates a response using OpenAI’s API.
4. **Response Delivery**: The answer is displayed in real-time on the portfolio website.

## Future Enhancements
- **Improved Personalization**: Enhancing the chatbot’s ability to reflect my communication style.
- **Voice Interaction**: Adding support for voice input and responses.
- **More Data Sources**: Integrating additional sources like GitHub activity and blog posts for richer responses.

## Deployment
- The backend and AI processing are hosted on **GCP Cloud Run**.
- PostgreSQL stores structured data related to interactions and context.
- Redis optimizes chatbot performance by caching frequent queries.
- Docker ensures consistent and scalable deployment across environments.
- Nginx handles authentication requests, improving security and load management.
- Terraform manages infrastructure provisioning, ensuring reproducibility and scalability.
