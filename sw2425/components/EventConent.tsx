interface CallToActionProps {
    text: string;
    link: string;
  }
  
  const CallToAction: React.FC<CallToActionProps> = ({ text, link }) => {
    return (
      <div className="text-center">
        <p>{text}</p>
        <div className="mt-4 flex justify-center">
          <button 
            className="font-bold bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
            onClick={() => window.open(link, "_blank")}
          >
            Register Here
          </button>
        </div>
      </div>
    );
  };
  
  export default CallToAction;
  