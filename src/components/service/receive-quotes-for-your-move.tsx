import { Star } from "lucide-react";
import PostCodeInput from "../post-code-input";

const ReceiveQuotesForYourMove = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-full -translate-y-32 translate-x-32 opacity-30"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-100 to-yellow-100 rounded-full translate-y-24 -translate-x-24 opacity-40"></div>

    <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row text-center lg:text-left">
      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-2">
          <Star className="w-4 h-4 fill-current" />
          <span>Get Your Free Quote</span>
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Receive quotes for your move
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed">
          Discover which companies match your requirements in a matter of
          minutes. Get instant quotes from verified professionals.
        </p>
      </div>
      <div className="w-1/2">
        <PostCodeInput />
      </div>
    </div>
  </div>
);


export default ReceiveQuotesForYourMove;