import React, { Component } from "react";



export default class ButtonLoader extends Component {
  state = {
    loading: false
  };

  giveTotal = () => {
    let sendAmount = document.getElementById("Amount").value;
    new document.getElementById("calculatedTotal").innerHTML = "fuck";
}

  fetchData = () => {
    this.setState({ loading: true });
    //Faking API call here
    // setTimeout(() => {
    //   this.setState({ loading: false });
    //       popup.classList.add('active');
    // }, 2000);
    setTimeout(this.completeTransaction, 3000);
  };

  completeTransaction = () => {
    var audio = new Audio('./../../images/static/success.mp3');
    this.setState({ loading: false });
    let popup = document.querySelector(".popup");
    let close = document.querySelector(".close");
    popup.classList.add('active');
    audio.play();
    

    close.onclick = function() {
        popup.classList.remove('active');
  }
}

  render() {
    const { loading } = this.state;

    return (
      <div className="w-full" style={{ marginTop: "0px" }}>
        <button className="text-white bg-zap-black font-bold w-full mt-2 border-[px] p-4 border-[#bababa6d] rounded-md cursor-pointer sendButton hover:bg-gray-500 hover:shadow-xl" onClick={this.fetchData} disabled={loading}>
          {loading && (
            <svg role="status" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-zap-white fill-gray-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          )}
          {loading && <span>Sending</span>}
          {!loading && <span className="sendButton justify-between flex ">Send Now <span id="calculatedTotal"></span><svg width="14" height="12" viewBox="0 0 14 12" fill="none" class="style__btnIcon--B225L ml-40 button-arrow" aria-hidden="true"><path d="M8 9.586c0 .89 1.077 1.337 1.707.707l3.586-3.586a1 1 0 000-1.414L9.707 1.707C9.077 1.077 8 1.523 8 2.414v7.172z" fill="#fff"></path><rect y="5" width="9" height="2" rx="1" fill="#fff"></rect></svg></span>}
        </button>
      </div>
    );
  }
}
