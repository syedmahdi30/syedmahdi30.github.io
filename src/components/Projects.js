// Projects.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const projects = [
  {
    title: "Chicago Crime Data Analysis",
    description: "A comprehensive analysis of Chicago crime data using Apache Spark and spatial analysis tools. The project involved processing 14M+ records and creating interactive visualizations.",
    imgUrl: "/images/projects/chicago-crime.jpg",
    projectUrl: "https://github.com/syedmahdi30/cs167-final-project/tree/a-5",
    details: [
      "🔍 Processed & Enriched 14M+ Chicago Crime Records using Apache Spark and Beast for spatial joins, adding ZIP code data via polygon matching to enable geographic-level analysis.",
      "📦 Optimized Data with Parquet Format, reducing storage and improving query efficiency—achieving up to 80% compression for large-scale datasets.",
      "🗺️ Visualized Crime Distribution via choropleth maps and bar charts by aggregating and joining spatial-temporal data, rendered with QGIS and Excel.",
      "📆 Built Spatio-Temporal Query Engine to filter crimes by date and location dynamically, supporting CSV output and matplotlib-based geographic plotting.",
      "🤖 Trained ML Classifier to Predict Arrests using Spark MLlib with tokenization and logistic regression, achieving measurable precision/recall on datasets up to 100k records."
    ]
  },
  { 
    title: "French-to-English Neural Machine Translation", 
    description: "Developed a state-of-the-art neural machine translation system using PyTorch, implementing attention mechanisms and advanced NLP techniques for accurate French-to-English translation.", 
    imgUrl: "/images/projects/frenchtoenglish.jpg",
    projectUrl: "https://colab.research.google.com/drive/1iW2rwmBqG7taHbr-MziBqPX0x3H66Mzz?usp=sharing",
    details: [
      "🔁 Built a Seq2Seq Translation Model with Attention using PyTorch to convert French sentences into English with GRU-based encoder-decoder architecture.",
      "🧠 Integrated Custom Attention Mechanism to dynamically focus on relevant input tokens during decoding, significantly improving translation accuracy.",
      "🧪 Trained on 10k+ Sentence Pairs with real-time loss monitoring and support for teacher forcing, achieving substantial loss reduction across 75k iterations.",
      "🧾 Implemented End-to-End NLP Pipeline, including Unicode normalization, tokenization, embedding, and output generation with interpretable attention heatmaps.",
      "📉 Achieved Fluent, Context-Aware Translations and visualized attention alignments, showcasing model reasoning and debugging potential."
    ]
  },
  { 
    title: "Project Rishi Website", 
    description: "Built a responsive website for Project RISHI using Next.js and Tailwind CSS, focusing on sustainable village development and student-led initiatives.", 
    imgUrl: "/images/projects/dashboard.jpg",
    projectUrl: "https://github.com/acm-ucr/rishi-website",
    details: [
      "🌐 Built a Responsive Website with Next.js & Tailwind CSS to promote Project RISHI's mission of sustainable village development.",
      "🧩 Designed and Implemented Modular UI Components in React, enabling maintainable and scalable interfaces across student-led initiatives.",
      "⚡ Enhanced Performance with Static Site Generation, optimizing load times and SEO using Next.js features.",
      "🧪 Enforced Code Quality Standards using Prettier, ESLint, and GitHub Actions for automated linting, formatting, and CI validation.",
      "🎨 Collaborated via Figma to translate high-fidelity design prototypes into production-ready components with pixel-perfect accuracy."
    ]
  },
  {
    title: "Emotion Classification System",
    description: "Developed a binary emotion classifier using logistic regression and the NRC Emotion Lexicon, focusing on interpretable emotion prediction from text data.",
    imgUrl: "/images/projects/emotion-classification.jpg",
    projectUrl: "https://colab.research.google.com/drive/1ggBsTJMNEM1Ffndx3bt0TnL8MrIeYTht?usp=sharing",
    details: [
      "🧠 Developed a Binary Emotion Classifier (Joy vs. Sadness) using hand-coded logistic regression and the NRC Emotion Lexicon, enabling interpretable emotion prediction from text data.",
      "🧹 Preprocessed Data with spaCy & NLTK, applying stop-word removal, stemming, and tokenization to convert raw text into stemmed token features.",
      "📊 Engineered Lexical Features such as emotion word counts (x1, x2), total tokens (x3), emotion ratios, and lexical differentials to normalize sentiment intensity across varying sentence lengths.",
      "🔁 Trained Model via Custom SGD and tuned learning rates (best: 0.5) to minimize validation loss (as low as 9.73e-11), demonstrating successful optimization on a small labeled dataset.",
      "📈 Evaluated Classifier on Test Set, achieving: Precision: 0.10, Recall: 1.00, Accuracy: 0.10, F1 Score: 0.18, and visualized results with a confusion matrix to assess model generalization."
    ]
  },
  {
    title: "Natural Language Processing Simplified",
    description: "Introduction to NLP",
    imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    projectUrl: "https://medium.com/@humansforai/natural-language-processing-simplified-49a7fe6c4dff",
    details: [
      "📝 Explains what NLP is and how it bridges the gap between human language and computers, enabling machines to understand and generate text.",
      "🔤 Describes the core building blocks of NLP, including tokenization, part-of-speech tagging, parsing, and the use of neural networks.",
      "📚 Traces the history of NLP from rule-based systems to modern deep learning and large language models like GPT and BERT.",
      "🌍 Highlights real-world applications such as chatbots, sentiment analysis, document processing, and healthcare data analysis.",
      "⚖️ Discusses ethical concerns in NLP, including bias, fairness, privacy, and the importance of transparency and accountability."
    ]
  },
  {
    title: "AI Can Learn From Their Dreams: World Models",
    description: "Introduction to the concept of World Models",
    imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsmartlabai.medium.com%2Fworld-models-a-reinforcement-learning-story-cdcc86093c5&psig=AOvVaw3iebeKwOCAFV75rFrJ3qi4&ust=1753409171508000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCMC6x6m01I4DFQAAAAAdAAAAABAE",
    projectUrl: "https://medium.com/@humansforai/ai-can-learn-from-their-dreams-world-models-3018fb21602b",
    details: [
      "🧠 Explains how both humans and AI build 'world models'—internal representations of reality used to understand and predict their environment.",
      "🚗 Describes how deep learning agents use simulated environments (like car racing games) to learn about the world through experience.",
      "🌀 Introduces Variational Autoencoders (VAE) for compressing complex images into essential vector representations, making learning more efficient.",
      "🔄 Details the use of Recurrent Neural Networks (RNNs) and Mixture Density Networks (MDNs) to predict future events and enable planning.",
      "🎮 Highlights the VizDoom experiment, where AI agents trained in dream-like simulations successfully transferred skills to real-world scenarios.",
      "⚡ Emphasizes the efficiency and versatility of World Models, which reduce computational requirements and can be applied to diverse tasks.",
      "🧩 Outlines the modular architecture: VAE for perception, MDN-RNN for prediction, and a simple controller for decision-making.",
      "🧐 Discusses challenges such as memory limitations and the risk of agents exploiting flaws in simulated environments.",
      "🌍 Explores the broader impact of World Models on AI development, democratization of training, and philosophical questions about intelligence and learning."
    ]
  }
];


export const Projects = () => {
  return (
    <section className="project" id="projects" data-aos="fade-up">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2>Projects & Articles</h2>
              <p>Here are some of my recent projects and articles that showcase my skills and experience.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="project-slider"
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                slidesToSlide={1}
                shouldResetAutoplay={true}
                swipeable={true}
                draggable={true}
              >
                {projects.map((project, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="project-box">
                        <img src={project.imgUrl} alt={project.title} />
                        <div className="project-info">
                          <h4>{project.title}</h4>
                          <p>{project.description}</p>
                          {project.details && (
                            <div className="project-details">
                              {project.details.map((detail, idx) => (
                                <p key={idx} className="detail-item">{detail}</p>
                              ))}
                            </div>
                          )}
                          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                            <button>{project.title === "Natural Language Processing Simplified" ? "Read Article" : "View Project"}</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;