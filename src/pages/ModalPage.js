import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal = 
    <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div className="relative">
             <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal &&  modal}
            {/* Below is just the dummy text for demo purpose */}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dapibus maximus. Nullam pharetra lacus erat, sed tincidunt enim tincidunt quis. Curabitur vel sodales libero, quis viverra sapien. Aliquam nisi nisl, sodales quis placerat et, vehicula ut turpis. Integer sit amet vulputate neque. Suspendisse dictum eget lorem in convallis. Pellentesque et est vestibulum, dignissim purus interdum, dapibus odio. Sed maximus mollis orci, quis pulvinar sem blandit id.
            </p>
           
        </div>
    );
}

export default ModalPage;