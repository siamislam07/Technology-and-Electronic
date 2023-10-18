import question from '../../assets/question/questions-186_256.gif'
const Faq = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:gap-24 lg:flex-row">
                    <img src={question} className="w-3/4 lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How do I register for the event?
                            </div>
                            <div className="collapse-content">
                                <p>First You Have to Login than there is a Read More link go to that link in that there is a participate and buy button.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Is there a registration deadline?
                            </div>
                            <div className="collapse-content">
                                <p>Yes. The Registration End on 31 October </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Can I bring my own equipment or devices to the event?
                            </div>
                            <div className="collapse-content">
                                <p>Yes</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Will there be Wi-Fi available at the venue?
                            </div>
                            <div className="collapse-content">
                                <p>Yes</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Can I volunteer or participate in event activities?
                            </div>
                            <div className="collapse-content">
                                <p>Yes. If you are interest then send us a mail</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Are there age restrictions for attending the event?
                            </div>
                            <div className="collapse-content">
                                <p>No. if you are interest about the topic then join </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;