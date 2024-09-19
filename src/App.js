import React, { useState } from "react";
import {PaystackConsumer} from "react-paystack";

const contactInfo = {
  phoneNumber: "+2348154389019",
  email: "[REDACTED]",
};

const socialLinks = [
  {
    name: "facebook",
    link: "https://ng.linkedin.com/in/kenneth-nkwocha",
  },
  {
    name: "twitter",
    link: "https://ng.linkedin.com/in/kenneth-nkwocha",
  },
  {
    name: "instagram",
    link: "https://ng.linkedin.com/in/kenneth-nkwocha",
  },
  {
    name: "youtube",
    link: "https://ng.linkedin.com/in/kenneth-nkwocha",
  },
];

const features = [
  {
    id: "001",
    name: "Chella",
    image: "images/speaker-1.jpg",
  },
 
];

const sponsors = [
  {
    id: "001",
    brand: "Something",
    image: "images/sponsor-logo-1.png",
  },
  {
    id: "002",
    brand: "Something",
    image: "images/sponsor-logo-1.png",
  },
  {
    id: "003",
    brand: "Something",
    image: "images/sponsor-logo-1.png",
  },
];

const ticketPricing = [
  {
    id: "001",
    title: "Regular",
    price: 2000,
    literal: "2k",
  },
  {
    id: "002",
    title: "VIP",
    price: 10000,
    literal: "10k",
  },
  {
    id: "003",
    title: "VVIP",
    price: 100000,
    literal: "100k",
    subtext: "Table of 4",
  },
  {
    id: "004",
    title: "Big Boys",
    price: 300000,
    literal: "300k",
    subtext: "Sit of 10",
  },
  {
    id: "005",
    title: "Ballers",
    price: 500000,
    literal: "500k",
    subtext: "Sit of 2",
  },
];



function App() {

  return (
    <>
      <Header />
      <main role="main">
        
        <TicketPricing />
        <Features />
        {/*<Sponsors />*/}
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header
      id="mu-hero"
      className=""
      role="banner"
      style={{
        backgroundImage: 'url("images/head-featured-bg.jpg")',
      }}
    >
      <div className="mu-hero-overlay">
        <div className="container">
          <div className="mu-hero-area">
            {/* Start hero featured area */}
            <div className="mu-hero-featured-area">
              {/* Start center Logo */}
              <div className="mu-logo-area">
              <h1>
                 THE VIBEZ ONLY 
                </h1>
                <h5>presents</h5>
              </div>
              {/* End center Logo */}

              <div className="mu-hero-featured-content">
                <img src="images/intro.png" alt="intro"/>
                
                <h2>...taking you back in time</h2>
                <p className="mu-event-date-line">
                  10 August, 2024. Awka, Anambra
                </p>
              </div>
              
            </div>
            {/* End hero featured area */}
          </div>
        </div>
      </div>
    </header>
  );
}


function Features() {
  return (
    <section id="mu-speakers">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-speakers-area">
              <div className="mu-title-area">
                <h2 className="mu-title">Featuring...</h2>
              </div>

              <div className="mu-speakers-content">
                <div className="mu-speakers-slider">
                  {features.map((feat) => (
                    <div className="mu-single-speakers" key={feat.id}>
                      <img src={feat.image} alt={feat.name} />
                      <div className="mu-single-speakers-info">
                        <h3>{feat.name}</h3>
                        <p>.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TicketPricing() {
  const [modal, setModal] = useState(false);
  const [currTicket, setCurrTicket] = useState(2000);
  function toggleModal(ct){
    setModal(!modal);
    setCurrTicket(ct)
  }

  return (
    <>
    {!modal || <TicketModalForm currTicket={currTicket} toggleModal={toggleModal}/>}
    
    <section id="mu-pricing">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-pricing-area">
              <div className="mu-title-area">
                <h2 className="mu-title">Buy Tickets</h2>
              </div>

              <div className="mu-pricing-conten">
                <div className="row">
                  {ticketPricing.map((ticket) => (
                    <div
                      className="col-md-4 col-sm-12 col-xs-12"
                      key={ticket.key}
                    >
                      <div className="mu-single-price">
                        <div
                          className="mu-price-header"
                          style={{
                            backgroundImage:
                              "url(images/ticket-bg.jpg)",
                          }}
                        ></div>
                        <h3 className="mu-price-title">
                          {ticket.title}
                        </h3>
                        <div className="mu-single-price-head">
                          <span className="mu-currency">N</span>
                          <span className="mu-rate">
                            {ticket.literal}
                          </span>
                        </div>
                        <ul>
                          <li>{ticket.subtext}</li>
                        </ul>
                        <button className="mu-register-btn" onClick={()=>toggleModal(ticket.price)}>Buy Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

function TicketModalForm({currTicket, toggleModal}){
  const dirty = useState(true);
  const publicKey =
    "pk_test_0dba618b517bae703f8960cd2836a7c01642efd3";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(currTicket);
  const [phoneNumber, setPhoneNumber] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100,
    publicKey,
    metadata :{
      phoneNumber
    },
  };
  function handleSuccess(reference){
    alert("Something has happened")
  };
  function handleClose(){
    alert("Something has not happened")
  };

  
  const componentProps = {
    ...config,
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose
};
  
  
// return <div id="buy-ticket-modal" class="modal fade show" style={{paddingRight: "17px", display: "block"}}>
  
  return <div id="buy-ticket-modal" class="modal" style={{paddingRight: "17px", display: "block"}}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Buy Tickets</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <form onSubmitCapture={(e)=>e.preventDefault()}>
          <div class="form-group">
            <input type="text" class="form-control" name="your-name" value={name} placeholder="Your Name" required onChange={(e) => setName(e.target.value)}/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="your-phone" value={phoneNumber} placeholder="Your Phone Number" required onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="your-email" value={email} placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div class="form-group">
            <select id="ticket-type" name="ticket-type" value={amount} class="form-control" required onChange={(e) => setAmount(e.target.value)}>
            {ticketPricing.map((ticket) => (
                            <option key={ticket.price} value={ticket.price}>
                              {ticket.title} (N{ticket.literal})
                            </option>
                          ))}
              
            </select>
          </div>
          <div class="text-center">
          <PaystackConsumer {...componentProps} >
          {({initializePayment}) => <button disabled={!dirty} onClick={() => initializePayment(handleSuccess, handleClose)}>BUY NOW</button>}
        </PaystackConsumer>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
}


function Sponsors() {
  return (
    <section id="mu-sponsors">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-sponsors-area">
              <div className="mu-title-area">
                <h2 className="mu-title">Our Sponsors</h2>
              </div>

              <div className="mu-sponsors-content">
                <div className="row">
                  {sponsors.map((sponsor) => (
                    <div
                      className="col-md-2 col-sm-4 col-xs-4"
                      key={sponsor.id}
                    >
                      <div className="mu-sponsors-single">
                        <img
                          src={sponsor.image}
                          alt={sponsor.brand}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="mu-footer" role="contentinfo">
      <div className="container">
        <div className="mu-footer-area">
          <div className="mu-title-area">
            <p>For partnership and sponsorship</p>
            <h2 className="mu-heading-title">Contact Us</h2>
            <div>
              <i className="fa fa-phone"></i>
              <a href={"tel:" + contactInfo.phoneNumber}>
                <p>{contactInfo.phoneNumber}</p>
              </a>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <a href={"mailto:" + contactInfo.email}>
                <p>{contactInfo.email}</p>
              </a>
            </div>
          </div>
          <div className="mu-footer-top">
            <div className="mu-social-media">
              {socialLinks.map((link) => (
                <a href={link.link}>
                  <i className={"fa fa-" + link.name}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default App;
