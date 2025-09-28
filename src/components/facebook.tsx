import React from "react";
import { ExternalLink, Users, Star, MessageCircle } from "lucide-react";
import { FACEBOOK_PAGE_URL } from "@/data/constants";
import { FaFacebook } from "react-icons/fa";

export default function Facebook() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
            <FaFacebook className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Follow us on Facebook
            </h3>
            <p className="text-sm text-gray-600">
              Multi Removal & Cleaning Services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-4">
            <FaFacebook className="w-10 h-10 text-white" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            Connect with us on Facebook
          </h4>
          <p className="text-gray-600 max-w-xs mx-auto">
            Stay updated with our latest posts, customer stories, and moving
            tips
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600 justify-center">
            <div className="p-1 bg-green-100 rounded-full">
              <Star className="w-3 h-3 text-green-600 fill-current" />
            </div>
            <span>Customer reviews and testimonials</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 justify-center">
            <div className="p-1 bg-blue-100 rounded-full">
              <MessageCircle className="w-3 h-3 text-blue-600" />
            </div>
            <span>Moving tips and industry updates</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 justify-center">
            <div className="p-1 bg-yellow-100 rounded-full">
              <Users className="w-3 h-3 text-yellow-600" />
            </div>
            <span>Behind-the-scenes content</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <FaFacebook className="w-5 h-5" />
          <span>Visit Our Facebook Page</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-100">
          <div className="text-center">
            <p className="text-sm text-gray-700 mb-2">
              Join our community of satisfied customers
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
              <span>Latest Updates</span>
              <span>•</span>
              <span>Success Stories</span>
              <span>•</span>
              <span>Moving Tips</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
