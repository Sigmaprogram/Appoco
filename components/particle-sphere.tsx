"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  z: number
  projectedX: number
  projectedY: number
  size: number
  opacity: number
}

export function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const pointsRef = useRef<Point[]>([])
  const rotationRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create points on sphere surface using fibonacci sphere
    const numPoints = 800
    const radius = Math.min(canvas.width, canvas.height) * 0.15
    const points: Point[] = []

    const goldenRatio = (1 + Math.sqrt(5)) / 2
    for (let i = 0; i < numPoints; i++) {
      const theta = 2 * Math.PI * i / goldenRatio
      const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints)
      
      points.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        projectedX: 0,
        projectedY: 0,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
      })
    }
    pointsRef.current = points

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      }
    }
    canvas.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Auto rotation + mouse influence
      rotationRef.current.x += 0.002 + mouseRef.current.y * 0.01
      rotationRef.current.y += 0.003 + mouseRef.current.x * 0.01

      const cosX = Math.cos(rotationRef.current.x)
      const sinX = Math.sin(rotationRef.current.x)
      const cosY = Math.cos(rotationRef.current.y)
      const sinY = Math.sin(rotationRef.current.y)

      // Project and sort points
      const projectedPoints = points.map((point) => {
        // Rotate around X axis
        const y1 = point.y * cosX - point.z * sinX
        const z1 = point.y * sinX + point.z * cosX

        // Rotate around Y axis
        const x2 = point.x * cosY + z1 * sinY
        const z2 = -point.x * sinY + z1 * cosY

        // Perspective projection
        const perspective = 400
        const scale = perspective / (perspective + z2)

        return {
          ...point,
          projectedX: centerX + x2 * scale,
          projectedY: centerY + y1 * scale,
          z: z2,
          scale,
        }
      })

      // Sort by z-depth (back to front)
      projectedPoints.sort((a, b) => a.z - b.z)

      // Draw connections between nearby points
      ctx.strokeStyle = "rgba(0, 0, 0, 0.03)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const dx = projectedPoints[i].projectedX - projectedPoints[j].projectedX
          const dy = projectedPoints[i].projectedY - projectedPoints[j].projectedY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 30) {
            const opacity = (1 - dist / 30) * 0.15 * ((projectedPoints[i].z + radius) / (2 * radius))
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(projectedPoints[i].projectedX, projectedPoints[i].projectedY)
            ctx.lineTo(projectedPoints[j].projectedX, projectedPoints[j].projectedY)
            ctx.stroke()
          }
        }
      }

      // Draw points
      projectedPoints.forEach((point) => {
        const depthOpacity = (point.z + radius) / (2 * radius)
        const finalOpacity = point.opacity * depthOpacity * 0.8
        const finalSize = point.size * point.scale

        // Glow effect
        const gradient = ctx.createRadialGradient(
          point.projectedX,
          point.projectedY,
          0,
          point.projectedX,
          point.projectedY,
          finalSize * 3
        )
        gradient.addColorStop(0, `rgba(0, 0, 0, ${finalOpacity})`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.arc(point.projectedX, point.projectedY, finalSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core point
        ctx.beginPath()
        ctx.arc(point.projectedX, point.projectedY, finalSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${finalOpacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: "none" }}
    />
  )
}
