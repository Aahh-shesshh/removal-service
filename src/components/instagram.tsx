import { INSTAGRAM_PROFILE_URL } from "@/data/constants";

const Instagram = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-pink-100 rounded-lg">
        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">Follow us on Instagram</h3>
        <p className="text-sm text-gray-600">See our work in action</p>
      </div>
    </div>
    <div className=" bg-gray-100 rounded-lg flex items-center justify-center">
      <iframe
        title="Instagram"
        src={INSTAGRAM_PROFILE_URL}
        width="100%"
        className="h-[450px]"
      />
    </div>
  </div>
);
export default Instagram;
