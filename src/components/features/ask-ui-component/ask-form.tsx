import React from "react";

function AskForm() {
  return (
    <form action="">
      <div className="grid grid-cols-2 gap-[24px] md:flex md:flex-col">
        <div>
          <h3 className="text-base font-semibold">Full Name*</h3>
          <input
            type="text"
            className="shadow-bottom btn-white h-[38px] w-[100%] rounded-[8px]"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold">Email*</h3>
          <input
            type="text"
            className="shadow-bottom btn-white h-[38px] w-[100%] rounded-[8px]"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold">Mobile Phone*</h3>
          <input
            type="text"
            className="shadow-bottom btn-white h-[38px] w-[100%] rounded-[8px]"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold">University Destination*</h3>
          <input
            type="text"
            className="shadow-bottom btn-white h-[38px] w-[100%] rounded-[8px]"
          />
        </div>
        <div className="col-span-2">
          <h3 className="text-base font-semibold">Message*</h3>
          <input
            type="text"
            className="shadow-bottom btn-white h-[104px] w-[100%] rounded-[8px]"
          />
        </div>
      </div>
    </form>
  );
}

export default AskForm;
