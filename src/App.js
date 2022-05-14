import "./styles.css";

export default function App() {

  return (
    <div className=" container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-5 col-sm-8 p-4 content ">
        <Msg 
      head1="FREE" 
      head2="$0"
      c1="✔ Single User"
      c2="✔ 5GB Storage"
      c3="✔ Unlimited Public Projects"
      c4="✔ Community Access"
      c5="✘ Unlimited Private Projects"
      c6="✘ Dedicated Phone Support"
      c7="✘ Free Subdomain"
      c8="✘ Monthly Status Reports"
      />
      </div>
        <div className="col-lg-3 col-md-5 col-sm-8 p-4 content">
        <Msg 
              head1="PLUS" 
              head2="$9"
              c1="✔ 5 Users"
              c2="✔ 50GB Storage"
              c3="✔ Unlimited Public Projects"
              c4="✔ Community Access"
              c5="✔ Unlimited Private Projects"
              c6="✔ Dedicated Phone Support"
              c7="✔ Free Subdomain"
              c8="✘ Monthly Status Reports"
        />
        </div>
        <div className="col-lg-3 col-md-5 col-sm-8 p-4 content">
        <Msg 
              head1="PRO" 
              head2="$49"
              c1="✔ Unlimited Users"
              c2="✔ 150GB Storage"
              c3="✔ Unlimited Public Projects"
              c4="✔ Community Access"
              c5="✔ Unlimited Private Projects"
              c6="✔ Dedicated Phone Support"
              c7="✔ Free Subdomain"
              c8="✔ Monthly Status Reports"
        />
        </div>
      </div>
    </div>

  );
}

// Components
function Msg({head1, head2, c1,c2,c3,c4,c5,c6,c7,c8}){
  return (
    <div>
    <div className="text-center">  
    <p className="fw-bold opacity-50">{head1}</p>
    <h4 className="display-6 fw-bold">{head2}<span>/month</span></h4>
    <hr/>
    </div>
    <p>{c1}</p>
    <p>{c2}</p>
    <p>{c3}</p>
    <p>{c4}</p>
    <p className="c5">{c5}</p>
    <p className="c6">{c6}</p>
    <p className="c7">{c7}</p>
    <p className="c8">{c8}</p>
   <div className="text-center"><button className="btn btn-primary w-100 rounded-pill">BUTTON</button></div>
    </div>
    );
}



