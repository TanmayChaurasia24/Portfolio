import React from 'react';
import Pcard from './Pcard';
const Blogs = () => {

  return (
    <div className="container my-5">
      <h1 className='my-4 text-center'>Blogs By Tanmay Kumar Chaurasia</h1>
      <Pcard title='Understanding Unicast, Broadcast, and Multicast: A Simple Guide' description='Communication lies at the heart of networking, and different strategies are employed to transmit data efficiently. Unicast, broadcast, and multicast are three fundamental methods used to deliver information in a network. In this blog post, we’ll delve into the details of each, breaking down the concepts in easy language.' to='https://medium.com/gitconnected/understanding-unicast-broadcast-and-multicast-a-simple-guide-bd9ece569c0a'></Pcard>

      <Pcard title='These terms will help you a lot- Computer Networks' description='If you are an computer enthusiast then computer networking is skill that everyone should be aware with, but when you start learning computer networks then you come across with some words that have special meaning in computer networking, so in this blog we will learn about some the terms that are frequently used in networking so lets start but before that if you haven’t seen by blogs on OSI Model and TCP/IP model then I recommend you to read it, so lets start with this blog without any delay.' to='https://medium.com/@kuamrchaurasiatanmay/these-terms-will-help-you-a-lot-computer-networks-226b71e0be34'></Pcard>

      <Pcard title='Cracking the Code: A Beginner’s Journey into TCP/IP Model' description='TCP, or Transmission Control Protocol, and IP, or Internet Protocol, Together, they make up the TCP/IP model, which has a simple job: moving data from one computer to another. This model divides the data into packets from the sender’s side and recombine all the packets from the receiver end. This model is like a well-organized team with four layers, each having its own role.' to='https://medium.com/gitconnected/cracking-the-code-a-beginners-journey-into-tcp-ip-model-ca50f070483a'></Pcard>

      <Pcard title='Demystifying the OSI Model: A Beginner’s Guide' description='The OSI Model, or Open Systems Interconnection Model, is like a roadmap for computer networks. It’s a conceptual framework that standardizes how different parts of a network communicate. Picture it as a guide that ensures devices from various manufacturers can talk to each other seamlessly. The model divides the communication process into seven layers, and each layer has a unique role to play.
The Seven Layers Explained:' to='https://medium.com/gitconnected/demystifying-the-osi-model-a-beginners-guide-4e2e77b729c0'></Pcard>

      <Pcard title='Understand Virtual DOM in React' description='DOM stands for ‘Document Object Model’. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app. DOM represents the entire UI of your application. The DOM is represented as a tree data structure. It contains a node for each UI element present in the web document.' to='https://medium.com/gitconnected/understand-virtual-dom-in-react-142c127acf54'></Pcard>

      <Pcard title='API fetching in javascript' description='APIs (Application Programming Interfaces) serve as bridges between different applications, allowing them to communicate and share information. In this beginner-friendly guide, we’ll delve into the world of API fetching using JavaScript, demystifying the process and empowering you to integrate external data seamlessly into your web projects.' to='https://medium.com/gitconnected/api-fetching-in-javascript-bfd1529a0a53'></Pcard>

      <Pcard title='10 Weirdest Programming language- I bet You don’t know them' description='Programming languages are the backbone of software development, enabling developers to communicate with computers and create the digital wonders we use every day. While most programmers are familiar with mainstream languages like Python, Java, and C++, the world of coding is vast and diverse, with some languages taking a more unconventional approach. In this blog post, we’ll explore 10 weird and wonderful programming languages that defy convention and showcase the creativity of the coding community.' to='https://medium.com/gitconnected/10-weirdest-programming-language-i-bet-you-dont-know-them-99e993cc371e'></Pcard>
    </div>
)};

export default Blogs;
