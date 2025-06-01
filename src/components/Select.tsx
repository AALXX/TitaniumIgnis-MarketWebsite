"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronDown, Check } from "lucide-react"

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectGroup {
  label: string
  options: SelectOption[]
}

export interface SelectProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  options?: SelectOption[]
  groups?: SelectGroup[]
  disabled?: boolean
  required?: boolean
  name?: string
  className?: string
  onValueChange?: (value: string) => void
}

export function Select({
  value,
  defaultValue,
  placeholder = "Select an option",
  options = [],
  groups = [],
  disabled = false,
  required = false,
  name,
  className = "",
  onValueChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || "")
  const [focusedIndex, setFocusedIndex] = useState(-1)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const optionRefs = useRef<(HTMLDivElement | null)[]>([])

  const allOptions = groups.length > 0 ? groups.flatMap((group) => group.options) : options

  const selectedOption = allOptions.find((option) => option.value === selectedValue)
  const selectedLabel = selectedOption?.label || ""

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (focusedIndex >= 0 && optionRefs.current[focusedIndex]) {
      optionRefs.current[focusedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      })
    }
  }, [focusedIndex])

  const handleSelect = useCallback(
    (optionValue: string) => {
      setSelectedValue(optionValue)
      onValueChange?.(optionValue)
      setIsOpen(false)
      setFocusedIndex(-1)
      triggerRef.current?.focus()
    },
    [onValueChange],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return

      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            setFocusedIndex(0)
          } else if (focusedIndex >= 0) {
            const option = allOptions[focusedIndex]
            if (option && !option.disabled) {
              handleSelect(option.value)
            }
          }
          break

        case "Escape":
          e.preventDefault()
          setIsOpen(false)
          setFocusedIndex(-1)
          triggerRef.current?.focus()
          break

        case "ArrowDown":
          e.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            setFocusedIndex(0)
          } else {
            const nextIndex = Math.min(focusedIndex + 1, allOptions.length - 1)
            setFocusedIndex(nextIndex)
          }
          break

        case "ArrowUp":
          e.preventDefault()
          if (isOpen) {
            const prevIndex = Math.max(focusedIndex - 1, 0)
            setFocusedIndex(prevIndex)
          }
          break

        case "Tab":
          setIsOpen(false)
          setFocusedIndex(-1)
          break
      }
    },
    [disabled, isOpen, focusedIndex, allOptions, handleSelect],
  )

  const renderOptions = () => {
    let optionIndex = 0

    if (groups.length > 0) {
      return groups.map((group, groupIndex) => (
        <div key={group.label}>
          <div className="py-1.5 px-3 text-sm font-semibold text-zinc-300">{group.label}</div>
          {group.options.map((option) => {
            const currentIndex = optionIndex++
            return (
              <div
                key={option.value}
                ref={(el) => (optionRefs.current[currentIndex] = el)}
                className={`relative flex cursor-pointer select-none items-center px-3 py-1.5 text-sm outline-none transition-colors ${
                  option.disabled
                    ? "pointer-events-none opacity-50"
                    : focusedIndex === currentIndex
                      ? "bg-zinc-700 text-zinc-100"
                      : "hover:bg-zinc-700 hover:text-zinc-100"
                } ${option.value === selectedValue ? "text-zinc-100" : "text-zinc-300"}`}
                onClick={() => !option.disabled && handleSelect(option.value)}
                onMouseEnter={() => !option.disabled && setFocusedIndex(currentIndex)}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  {option.value === selectedValue && <Check className="h-4 w-4" />}
                </span>
                <span className="ml-6">{option.label}</span>
              </div>
            )
          })}
          {groupIndex < groups.length - 1 && <div className="-mx-1 my-1 h-px bg-zinc-700" />}
        </div>
      ))
    }

    return options.map((option) => {
      const currentIndex = optionIndex++
      return (
        <div
          key={option.value}
          ref={(el) => (optionRefs.current[currentIndex] = el)}
          className={`relative flex cursor-pointer select-none items-center px-3 py-1.5 text-sm outline-none transition-colors ${
            option.disabled
              ? "pointer-events-none opacity-50"
              : focusedIndex === currentIndex
                ? "bg-zinc-700 text-zinc-100"
                : "hover:bg-zinc-700 hover:text-zinc-100"
          } ${option.value === selectedValue ? "text-zinc-100" : "text-zinc-300"}`}
          onClick={() => !option.disabled && handleSelect(option.value)}
          onMouseEnter={() => !option.disabled && setFocusedIndex(currentIndex)}
        >
          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            {option.value === selectedValue && <Check className="h-4 w-4" />}
          </span>
          <span className="ml-6">{option.label}</span>
        </div>
      )
    })
  }

  return (
    <div className={`relative ${className}`}>
      {/* Hidden input for form submission */}
      {name && <input type="hidden" name={name} value={selectedValue} required={required} />}

      {/* Trigger button */}
      <button
        ref={triggerRef}
        type="button"
        className={`flex h-10 w-full items-center justify-between rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent transition-colors ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={selectedLabel || placeholder}
      >
        <span className={selectedLabel ? "text-zinc-100" : "text-zinc-400"}>{selectedLabel || placeholder}</span>
        <ChevronDown className={`h-4 w-4 opacity-50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          ref={contentRef}
          className="absolute z-50 mt-1 max-h-96 w-full overflow-auto rounded-md border border-zinc-700 bg-zinc-800 text-zinc-100 shadow-md"
          role="listbox"
          aria-label="Options"
        >
          <div className="p-1">
            {allOptions.length === 0 ? (
              <div className="px-3 py-1.5 text-sm text-zinc-400">No options available</div>
            ) : (
              renderOptions()
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export const SelectTrigger = ({ className = "", children, ...props }: React.ComponentPropsWithoutRef<"button">) => (
  <button
    className={`flex h-10 w-full items-center justify-between rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
)

export const SelectValue = ({ className = "", children, ...props }: React.ComponentPropsWithoutRef<"span">) => (
  <span className={`text-sm text-zinc-100 ${className}`} {...props}>
    {children}
  </span>
)

export const SelectContent = ({ className = "", children, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={`absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-zinc-700 bg-zinc-800 text-zinc-100 shadow-md ${className}`}
    {...props}
  >
    {children}
  </div>
)

export const SelectItem = ({ className = "", children, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={`relative flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none transition-colors hover:bg-zinc-700 hover:text-zinc-100 disabled:pointer-events-none disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </div>
)

export const SelectLabel = ({ className = "", children, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={`py-1.5 pl-8 pr-2 text-sm font-semibold text-zinc-300 ${className}`} {...props}>
    {children}
  </div>
)

export const SelectGroup = ({ className = "", children, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={`p-1 ${className}`} {...props}>
    {children}
  </div>
)

export const SelectSeparator = ({ className = "", ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={`-mx-1 my-1 h-px bg-zinc-700 ${className}`} {...props} />
)
