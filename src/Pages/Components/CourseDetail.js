import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiUsers, HiStar, HiDownload } from "react-icons/hi";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const CourseDetail = () => {
    const courseDetail = useLoaderData();

    //Generating PDF
    const printRef = React.useRef();
    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };

    //Details of a particular course
    const { course_name, description, img, price, enrolled, rating, id } = courseDetail;
    return (
        <div>
            <Card className="text-center mb-5">
                <Card.Header className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                    <h4>{course_name}</h4>
                    <h5>Download PDF <Button onClick={handleDownloadPdf} variant="warning"><HiDownload className='fs-4' /></Button></h5>
                </Card.Header>
                <Card.Img variant="top p-3" src={img} />
                <div ref={printRef}>
                    <Card.Body>
                        <Card.Title><h3>{course_name}</h3></Card.Title>
                        <Card.Text className='text-start'>
                            {description}
                        </Card.Text>
                        <h5>Price: ${price}</h5>
                        <Link to={`/checkout/${id}`}><Button variant="warning">Get Premium Access</Button></Link>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-evenly'>
                        <p><HiUsers className='text-primary' /> Students: {enrolled}</p>
                        <p><HiStar className='text-warning' /> Rating: {rating}</p>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default CourseDetail;