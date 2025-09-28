import React from "react";
import {
  CheckCircle,
  Users,
  Clock,
  Shield,
  Award,
  TrendingUp,
  Heart,
  MapPin,
} from "lucide-react";
import { data } from "@/data/about-us";
import Facebook from "@/components/facebook";
import Instagram from "@/components/instagram";
import ReceiveQuotesForYourMove from "@/components/service/receive-quotes-for-your-move";

export default function AboutUs() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Happy Customers",
      color: "text-blue-600",
    },
    {
      icon: Clock,
      value: "15+",
      label: "Years Experience",
      color: "text-green-600",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Insured Moves",
      color: "text-purple-600",
    },
    {
      icon: Award,
      value: "5-Star",
      label: "Average Rating",
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="bg-gray-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
          <div
            className="absolute bottom-32 right-16 w-16 h-16 bg-green-100 rounded-full opacity-30 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span>Australia's Most Trusted Removal Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                About Multi Removal
              </span>
              <br />
              <span className="text-gray-900">& Cleaning Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="mb-4 inline-flex items-center justify-center">
                  <div
                    className={`p-4 rounded-2xl bg-gray-50 group-hover:bg-gray-100 transition-colors ${stat.color.replace("text-", "bg-").replace("-600", "-50")}`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-24">
        <div className="gap-12 lg:flex">
          {/* Main Content */}
          <div className="w-full max-w-4xl space-y-12 py-12">
            {data.paragraphs?.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
              >
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        {item.title}
                      </h2>
                    </div>

                    {item.image && (
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                          alt={item.title}
                          className="w-full h-64 lg:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    )}

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  {item.list && (
                    <div className="grid gap-6 md:grid-cols-2">
                      {item.list.map((listItem, j) => (
                        <div
                          key={j}
                          className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            <div className="p-2 bg-green-100 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-gray-900">
                              {listItem.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {listItem.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Location Section */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Serving All of Australia
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  From bustling Sydney to beautiful Perth, we provide
                  comprehensive removal services across all major Australian
                  cities and regional areas.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {["Sydney", "Melbourne", "Brisbane", "Perth"].map(
                    (city, i) => (
                      <div
                        key={i}
                        className="p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border border-blue-100"
                      >
                        <div className="font-semibold text-gray-900">
                          {city}
                        </div>
                        <div className="text-sm text-gray-600">
                          Full Service Available
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full flex-1 space-y-8 py-14">
            <Instagram />
            <Facebook />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <ReceiveQuotesForYourMove />
        </div>
      </div>
    </div>
  );
}
