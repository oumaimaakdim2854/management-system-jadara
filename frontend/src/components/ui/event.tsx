"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

const typeColors: Record<string, string> = {
  Meeting: "border-l-4 border-blue-500",
  Launch: "border-l-4 border-green-500",
  Event: "border-l-4 border-purple-500",
  Webinar: "border-l-4 border-yellow-500",
  Workshop: "border-l-4 border-pink-500",
};

export default function CalendarWithCards() {
  const [events, setEvents] = useState<Record<number, { title: string; type: string }[]>>({
    3: [{ title: "Team Standup", type: "Meeting" }],
    7: [
      { title: "Product Launch", type: "Launch" },
      { title: "Client Review", type: "Meeting" },
    ],
    12: [{ title: "Hackathon", type: "Event" }],
    20: [{ title: "Webinar: AI Trends", type: "Webinar" }],
    24: [{ title: "Design Sprint", type: "Workshop" }],
  });

  const [newEvent, setNewEvent] = useState({ day: "1", title: "", type: "Meeting" });

  const addEvent = () => {
    const day = parseInt(newEvent.day);
    const updatedEvents = { ...events };
    if (!updatedEvents[day]) updatedEvents[day] = [];
    updatedEvents[day].push({ title: newEvent.title, type: newEvent.type });
    setEvents(updatedEvents);
    setNewEvent({ day: "1", title: "", type: "Meeting" });
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-100 via-white to-slate-200 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-800 drop-shadow-sm">
          June 2025
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex gap-6 bg-gradient-to-r from-amber-300 to-blue-500 text-white text-center rounded-2xl hover:scale-105 transition">
              <Plus size={16} /> Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl shadow-xl backdrop-blur-md border bg-white/70">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Add New Event</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Day</label>
                <Select
                  value={newEvent.day}
                  onValueChange={(value) => setNewEvent({ ...newEvent, day: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent>
                    {daysInMonth.map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Title</label>
                <Input
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="Event title"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Type</label>
                <Select
                  value={newEvent.type}
                  onValueChange={(value) => setNewEvent({ ...newEvent, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["Meeting", "Launch", "Event", "Webinar", "Workshop"].map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={addEvent} className="w-full bg-sky-700 hover:bg-sky-900 text-white">
                Save Event
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`rounded-2xl p-3 h-44 flex flex-col justify-between bg-white/80 shadow-md backdrop-blur-sm transition-transform hover:scale-[1.015] ${
              events[day] ? "ring-1 ring-purple-300" : ""
            }`}
          >
            <div className="text-sm font-semibold text-gray-700">{day}</div>

            <div className="space-y-2 overflow-y-auto max-h-32 pr-1">
              {events[day]?.map((event, i) => (
                <Card
                  key={i}
                  className={`shadow-sm bg-white/80 backdrop-blur border ${typeColors[event.type]} rounded-lg`}
                >
                  <CardHeader className="py-2 px-3">
                    <CardTitle className="text-sm font-medium leading-snug text-gray-800">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-1 px-3">
                    <Badge variant="outline" className="text-xs capitalize">
                      {event.type}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
