"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const DeshDialog = AlertDialogPrimitive.Root
const DeshDialogTrigger = AlertDialogPrimitive.Trigger
const DeshDialogPortal = AlertDialogPrimitive.Portal

const DeshDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out",
      className
    )}
    {...props}
    ref={ref}
  />
))
DeshDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const DeshDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DeshDialogPortal>
    <DeshDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-lg transform translate-x-[-50%] translate-y-[-50%] p-6 bg-white shadow-lg",
        className
      )}
      {...props}
    />
  </DeshDialogPortal>
))
DeshDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const DeshDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
)
DeshDialogHeader.displayName = "DeshDialogHeader"

const DeshDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end", className)}
    {...props}
  />
)
DeshDialogFooter.displayName = "DeshDialogFooter"

const DeshDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
DeshDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const DeshDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-neutral-500", className)}
    {...props}
  />
))
DeshDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

const DeshDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
DeshDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const DeshDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
DeshDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  DeshDialog,
  DeshDialogPortal,
  DeshDialogOverlay,
  DeshDialogTrigger,
  DeshDialogContent,
  DeshDialogHeader,
  DeshDialogFooter,
  DeshDialogTitle,
  DeshDialogDescription,
  DeshDialogAction,
  DeshDialogCancel,
}
