import { Button, Chip } from "@heroui/react";
import {
  BookOpen,
  Clock,
  User,
  Star,
  BarChart3,
  Globe,
} from "lucide-react";
import Image from "next/image";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:5000/courses/${id}`,
    {
      cache: "no-store",
    }
  );

  const course = await res.json();

  const {
    title,
    thumbnail,
    category,
    price,
    duration,
    instructor,
    description,
    level,
    totalLessons,
    rating,
    language,
  } = course;

  return (
    <div className="bg-slate-50 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side Image */}
          <div className="relative aspect-video rounded-4xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={
                thumbnail ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
              }
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side Details */}
          <div className="bg-white rounded-4xl p-8 border border-slate-200 shadow-sm">

            {/* Category */}
            <Chip
              color="primary"
              variant="flat"
              className="mb-4 font-semibold"
            >
              {category}
            </Chip>

            {/* Title */}
            <h1 className="text-4xl font-black text-slate-900 leading-tight">
              {title}
            </h1>

            {/* Instructor */}
            <div className="flex items-center gap-2 mt-5 text-slate-600">
              <User className="w-5 h-5" />
              <span>
                Instructor:
                <span className="font-bold text-slate-900 ml-1">
                  {instructor}
                </span>
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3 text-slate-600">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span>
                Rating:
                <span className="font-bold text-slate-900 ml-1">
                  {rating || "4.8"}
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-slate-600 leading-relaxed">
              {description ||
                "This course is designed to help students learn step by step with practical examples and real-world projects."}
            </p>

            {/* Course Info */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">
                    Duration
                  </p>
                  <h4 className="font-bold">
                    {duration || "12h"}
                  </h4>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">
                    Lessons
                  </p>
                  <h4 className="font-bold">
                    {totalLessons || 24}
                  </h4>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">
                    Level
                  </p>
                  <h4 className="font-bold">
                    {level || "Beginner"}
                  </h4>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs text-slate-500">
                    Language
                  </p>
                  <h4 className="font-bold">
                    {language || "English"}
                  </h4>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
              <div>
                <p className="text-sm text-slate-500">
                  Course Price
                </p>

                <h2 className="text-4xl font-black text-blue-600">
                  ${price}
                </h2>
              </div>

              <Button
                color="primary"
                size="lg"
                className="rounded-2xl font-bold px-8"
              >
                Enroll Now
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;