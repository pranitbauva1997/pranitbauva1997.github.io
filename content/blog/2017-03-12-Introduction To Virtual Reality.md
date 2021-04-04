+++
title = "Introduction to Virtual Reality"
date = 2017-03-12
+++

After hearing a lot of buzz about **VR (Virtual Reality)**, I thought it
is time, I look closely into what it actually is.

**Virtual Reality** is a computer generated (thus virtual) environment
which aims to be life-like. It is as if virtual things came to life.

After being extremely enthusiastic about this I searched about it more
and found that Udacity is offering the course named as [**Introduction
To Virtual Reality**](https://www.udacity.com/course/introduction-to-virtual-reality--ud1012).
So I decided to take that course. There have been some discussions in
our [Robotix](https://www.robotix.in/) group about buying a VR development
headset and starting off a project under our makerspace labs. Since I am
pretty keen about this, I thought of taking the udacity course so that
I have a solid idea about what VR actually is and what all it takes to
have a successful VR project before just jumping about in "coolness".

**Note:** What follows after this is kind of like class notes for the above
listed Udacity course.

# What is VR?

### Principles of VR

What makes VR, actually VR? The common features of VR devices include
a pair of lenses, a high definition display, tracking hardware. But is
the hardware it for VR? Nope, VR is all about creating a synthetic virtual
world which requires smooth working of several hardware and software
systems not just a headset.

There are various aspects in Virtual Reality
like **optics, displays, tracking, performance**, and many more.

### Optics

Since virtual reality headsets are held pretty close to the eye, it
becomes **really tough** to actually see the image. That is the reason
lenses are required. Lenses help to focus the light directly into the
retina from a near eyed object. The image would also look magnified after
going through the lenses. We can actually see individual pixels. Each
manufacturer has to make the best trade-off between the **field of view,
focal length, optical distortion** and finally **cost**. The lenses reduce the
apparent resolution of the VR display and they increase the distortions
in the VR display.

### Displays

These displays should have very high resolution because the lenses magnify
them and image resolution finally decreases when they hit the retina.

Ideally, resolution of the display should be around 160,000 by 160,000
for a full HD view but right now we haven't achieved that stage and it
is a long way to go.

The second most important component is having the display with **low
persistance**. It means that instead of showing the full image, it only
shows you a part of the image at a given time. Now the question arises,
**Why is it necessary?**.

Low persistence is necessary because it **eliminates motion blur** which
keeps the image clear from ground and also keeps it from smearing together.

Low persistence hides the pixels while they effectively change colour. This
gives us sharp, consistant and believable images.

### Tracking

Tracking allows the headset to know where you are in space. Most of the
VR headsets rely on **IMU (Inertial Measurement Unit)**. It enables high
speed rotational tracking. Unfortunately they can't tell where the object
is located, but can only give information about rotation.

IMUs employ variety of positional tracking techniques like **camera, lasers,
precise clocks, magnetic fields,** etc. This is an area of active research.

### Challenges

The biggest challenge that VR faces is simulator sickness. Some VR devices
give you headaches and make you feel dizzy.

What makes people uncomfortable?

Pretty much anything that is mis-matched between the body's internal sense
of motion and the data brain receives from your visual system. So if what
you see doesn't line up with what body feels, one can feel uncomfortable.

# Platforms and Paradigms

### Major VR Platforms

There is a major explosion of VR companies in recent times. The major are:

 * [Sony PlayStation VR](https://www.playstation.com/en-in/explore/playstation-vr/)
 * [HTC Vive](https://www.vive.com/us/)
 * [Oculus Rift](https://www.oculus.com/rift/)
 * [Samsung Gear VR](http://www.samsung.com/global/galaxy/gear-vr/)
 * [Google Daydream View](https://vr.google.com/daydream/)

### 3-DOF vs 6-DOF

**DOF** means **Degree of Freedom**. The 3-DOF VR devices can only tell where
you are looking while the 6-DOF VR devices can tell where you are looking
as well as your current location in 3D space.

**3-DOF** tracks the rotations along the X, Y and the Z axis.

**6-DOF** tracks the rotations along the X, Y and the Z axis. On top of that
it can also track the position along X, Y and Z axis.

### How IMUs Enable 3-DOF Tracking

A very popular IMU is the [Sparkfun 9-DOF Razor IMU](https://www.sparkfun.com/products/10736)
which has a gyroscope, accelerometer and a magnetometer in built. It takes
data from all of those, performs fancy math and then gives us all the
final data for the 9-DOF system.

Sometimes this IMU is in the phone and some times in the headset but no
matter what a VR system requires a IMU.

### Major 6-DOF Tracking System

Let's see how the two major players do it.

 1. **Oculus Rift**: It uses a tracking system called
 [**Constellation**](https://xinreality.com/wiki/Constellation). Rift has a
 large number of infrared LEDs. Each LED is blinking very very fast. There
 is also a separate camera placed on the desk or somewhere nearby. The
 camera catches these light patterns and the computer builds up a model.
 The program then tries to fit the 3D model it gets into the 2D model.
 By doing all of this, it can calculate all the data required for tracking
 6-DOF system.

 2. **HTC Vive**: It uses
 [**LightHouse**](http://doc-ok.org/?p=1478)
 tracking system. Unlike Rift, this one uses infrared lasers. It measures
 the time it takes to sweep the lazer horizontally and vertically to
 determine the location of the headset. This is a similar technique like
 light houses which help ships navigate successfully by using time
 measurements and by using an embedded IMU.

### Differences between mobile and desktop VR

| Mobile                          | Desktop                  |
| ------------------------------- | ------------------------ |
| IMU Tracking                    | Optical & IMU Tracking   |
| Untethered                      | Tethered                 |
| Less powerful                   | More powerful            |
| No additional hand controller   | Hand controller          |

### VR Development Platform

VR applications are easy to develop with the help of Game Engine softwares
like [**Unity**](https://unity3d.com/) which is a combination of both **Code +
Editor** so as to reduce efforts and time.

A typical game engine often provides:
 * 3D Rendering
 * Physics
 * Sound
 * Scripting
 * Animation
 * Asset Management
 * And more...

There are many other game engines like
[**Unreal Game Engine**](https://www.unrealengine.com/what-is-unreal-engine-4),
[**CryEngine**](https://www.cryengine.com/),
[**Lumberyard**](https://aws.amazon.com/lumberyard/) in the market.

There are various native development tools which can be used like **C++,
OpenGL, DirectX** if you don't want to use a game engine. The major
advantage of using these are very customizability but then one can to
compromise on development time which can get pretty long. These set of
tools are more useful when you are developing framework which others can
use.

There is also [**WebVR**](https://webvr.info/) but unfortunately it isn't
that powerful and missed on many features and is currently still under
heavy development. Maybe in future it can be used.

The further course now touches how to use the Unity3D platform to develop
VR applications.

This course was pretty interesting and I got to know some really good
insights on what VR actually is. I think I will do more research about this
and try and build a simple application on Unity3D before buying out the
VR headset!
