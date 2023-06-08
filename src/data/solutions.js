export const solutions = [
    {
        name: "Vision capture techniques",
        solution: "We propose the following solutions: 3D imaging scanning for large objects, high-resolution scanners for digitizing assemblages and paper-based objects, a microscope with a digital camera for capturing detailed images of frozen tissue samples, and dedicated equipment for converting analog audiovisual content into digital formats. These recommendations address specific requirements efficiently and professionally.",
        author: "Viviana Le",
        discuss: <p>
        The solutions for vision-capturing techniques to digitalise The World Museum's collections demonstrate their effectiveness and efficiency in achieving the project goals. These solutions offer a range of benefits that satisfies the business requirements and the 5-year time range through our proposed timeline.
        <br/><br/>
        The advantage of using 3D imaging scanners for large objects is the ability to create detailed and interactive representations. This enhances audience engagement and accessibility while preserving the artifacts in a digital format. (The Australian Museum, 2021)
        <br/><br/>
        Similarly, high-resolution scanners for paper-based objects provide accurate and high-quality digital replicas, capturing intricate details for a comprehensive digital record. (Mendez, et al., 2018)
        <br/><br/>
        Utilising microscope cameras for frozen tissue samples enables the analysis, conservation, and documentation of artistic works or cultural artifacts (Leica Microsystems, 2023). This solution offers precise and informative image capture, facilitating further research and preservation efforts. 
        <br/><br/>
        The 'trint' transcription software enhances accessibility by converting audio recordings into written text, making them searchable and enabling cross-referencing. (trint, 2023)
        <br/><br/>
        The financial allocation of resources for research, acquisition, and training ensures the availability and proper functioning of the vision-capturing technologies. Considering the collection size, the financial aspect of these visualisation solutions sums up to approximately $21.4 million. (Woody, 2021)
        <br/><br/>
        The chosen solutions satisfy business requirements, preserving and ensuring accessibility to the museum's collection. By capturing and enriching digital assets with research, data, histories, and imagery, comprehensive representations are produced. Efficient asset management through advanced technology enhances accessibility and facilitates information retrieval.
        <br/><br/>
        Moreover, our proposed timeline ensures the necessary research, setup, training, and digitization processes will be completed within the 5-year time frame. Our strategically organised timeline ensures a systematic and efficient approach to capturing the visual content of thousands of objects, with the expected time range of 1.5 years for topic 1. 
        <br/><br/>
        These solutions also consider factors such as limited space for capturing large and heavy dry objects, delicate handling of pinned objects, and the need for specialized equipment for liquid-preserved objects. However, the solutions can effectively overcome these limitations through appropriate protocols, workflows, and collaboration with experts.
        <br/><br/>
        Overall, the chosen vision-capturing techniques offer effective and efficient ways of digitalizing The World Museum's collections. Their advantages, financial considerations, business requirements satisfaction and our proposed timeline make them valuable solutions for preserving, accessing, and enriching the museum's cultural heritage in a digital format.
                </p>,
    },
    {
        name: "AI/ML solutions for analysis of unstructured data",
        solution: "We suggest utilizing free open-source software tools like Tesseract OCR, BERT language models, and OpenCV library for AI model training. These tools enable the extraction and recognition of language or texts, facilitating the reconstruction of unreadable paragraphs or visual contents for objects such as paper-based, pinned, assemblages. Additionally, sentiment information can be understood and applied, maximizing objectives while minimizing costs.",
        author: "Jinyang Li",
        discuss: <p>AI and machine learning solutions provide efficient and accurate automation workflows with high universality.<br/><br/>OCR models are specialized for extracting and recognizing text from images or scanned documents. They utilize advanced techniques to accurately interpret characters, even in difficult situations. For optimal OCR model performance, pre-processing computer vision techniques like denoising and image resizing are often applied to enhance image quality. This improves accuracy and recognition results.<br/><br/>Computer vision algorithms enable accurate visual reconstruction of objects with scale, illumination, and rotation invariance. They excel at extracting edge and content information even in challenging storage conditions, addressing sizing issues and providing valuable support for text inference and object classification.<br/><br/>A possible example of these algorithms would be SIFT feature detector.<br/><br/>NLP models excel at understanding and interpreting human language, enabling them to make inferences about text even when implicit meanings, sentiments, and intentions are involved. This makes them particularly well-suited for performing textual inference and reconstructing missing paragraphs in eroded paper-based objects.<br/><br/>By integrating NLP with computer vision algorithms, complex assemblage objects' text extraction and inference challenges are effectively overcome. Leveraging visual information analyzed by computer vision algorithms, the integrated model accurately predicts meaningful text from images, enhancing extraction for precise and reliable results.<br/><br/>Our choice of these techniques was strongly influenced by the abundance of free open-source tools available on the internet. As mentioned in the findings, the software tools we identified are well-known and dependable pre-built resources, significantly reducing software costs.<br/><br/>However, data preparation costs are essential and can amount to approximately $120,000 based on our calculations. Additionally, potential development costs could reach up to $150,000, with an estimated hardware cost of $15,000. Detailed calculations are provided in the appendix.<br/><br/>Although the training and development of these algorithms can be time-consuming, their implementation yields efficient and reliable results.<br/><br/>The early-stage focus should be on image data preparation and registration, along with conducting research. Subsequently, task splitting across multiple development periods enables ongoing progress throughout different stages.</p>,
    },
    {
        name: "Sensor-based technologies for item location tracking and digital registry",
        solution: "We utilize sensor-based technologies like RFID tags, barcode labels, and environment/temperature sensors to digitally track and locate objects. These technologies streamline asset registration, reduce manual work, and enable safe and efficient handling of special objects such as liquid-preserved items and frozen tissue samples.",
        author: "Marcus Hoang",
        discuss: <p>The proposed sensor-based technology solution offers an optimal approach for digitalizing and tracking a diverse range of objects in the world museum, ranging from small dry objects to liquid preserved items and frozen tissue samples. By utilizing RFID technologies for dry objects, we can facilitate efficient location and retrieval while mitigating theft risks. For liquid and frozen samples, the use of 2D barcodes provides accurate real-time data and reliable low-temperature tracking.
        <br /><br />Notably, this system supersedes alternative solutions like manual tracking, which is time-consuming, error-prone, and less effective in handling complex storage conditions. Additionally, our method is more cost-efficient than other high-tech solutions such as GPS tracking, which would significantly inflate the budget without offering substantial benefits for an indoor setting like a museum.
        <br /><br />From a financial perspective, the upfront costs for the RFID and 2D barcoding systems, while not insignificant, are likely to be offset by long-term savings in man-hours, loss prevention, and improved asset management. Furthermore, the additional costs related to system installation, software development, and staff training represent investments in sustainability and future readiness of the museum.
        <br /><br />The projected timeline further emphasizes the feasibility of our solution. While other approaches might require more extensive retrofitting or longer adoption periods, our strategy of staggered implementation allows for ongoing adjustments and learning. This phased approach minimizes disruption and facilitates a smoother transition, thereby making this sensor-based technology an optimal choice for cost-effectiveness and practical timelines.
      </p>,
    },
    {
        name: "Automation opportunities for workflows and asset management systems",
        solution: "We implement a centralized database solution that enables fast and secure access to museum asset data, including location and security status information. Through meticulous design and management, we can optimize workflow automation, providing crucial support for subsequent development stages in an efficient and consistent manner.",
        author: "Liam Fosdike",
        discuss: <p>
            A centralised database was chosen as it provides a central ‘location’ for the data to be stored and accessed across a local network, reducing redundancy, and is scalable with different systems and subsystems (especially to help provide easier maintenance and tighter security).
            <br /><br />
            The major cost for this database is mainly in developing it, and with a full team it should take about 6+ months to develop and launch. But we believe it should be able to be easier and cheaper to maintain, as it only requires a single storage system to maintain, and can be accessed by any authorised computer.
        </p>,
    },
    {
        name: "Access to a scaled workforce for transcription and quality processes",
        solution: "We employ a scalable workflow for transcription and quality processes. This includes assigning a team of workers to provide manual support for transcribing and digitizing handwritten contents, extracting hidden information, and capturing relevant details from collections, such as small or dry objects.",
        author: "Marcus Hoang",
        discuss: <p>
            The use of a scaled workforce can greatly assist with the digitisation process of the museum’s assets by ensuring the overall quality of the digitised assets.
            <br /><br />
            A scaled workforce can be utilised to assist with the transcription and digitisation of paper-based objects. Despite the advancements in AI, automatic transcription can still prove to be sometimes inaccurate, especially when dealing with harder to read items such as handwritten letters, or simply just get it wrong. A scaled workforce can be used to help ensure the quality by cross-referencing the texts and validating its accuracy.
            <br /><br />
            For other assets such as the pinned and small dry objects, a scaled workforce would allow the digitization processes to go quicker, and make sure any hidden data, or information that can’t be automatically digitised is recorded, and ensure the quality of the assets.
        </p>,
    }
]