import React from "react"
import "./specs.css"

const Specs = () => {
  return (
    <div className="specs-section">
      <div className="mrl-specs">
        <h2 className="specs-title">MRL Divas</h2>
        <div className="specs">
          <ul className="specs-list">
            <li>
              <b>Stops:</b> 7
            </li>
            <li>
              <b>Speed:</b> 0,15 m/s (ip to 0,30)
            </li>
            <li>
              <b>Pit:</b> 180mm min
            </li>
            <li>
              <b>Headroom:</b> 2450mm
            </li>
            <li>
              <b>Travel:</b> 25000mm max
            </li>
            <li>
              <b>Power supply:</b> 220v Single-phase / Three-phase
            </li>
          </ul>
          <ul className="specs-list">
            <li>
              <b>Traction:</b> Gearless motor
            </li>
            <li>
              <b>Capacity:</b> From 250kg to 400kg
            </li>

            <li>
              <b>Doors:</b> Automatic or swing
            </li>
            <li>
              <b>Motor power:</b> From 0,6 to 1,2 kw
            </li>
            <li>
              <b>Norms:</b> EN 81.41 , 2006/42/CE
            </li>
          </ul>
        </div>
      </div>
      <div className="hydraulic-specs">
        <h2 className="specs-title">Hydraulic platform Divas</h2>{" "}
        <div className="specs">
          <ul className="specs-list">
            <li>
              <b>Stops:</b> 7
            </li>
            <li>
              <b>Speed:</b> 0,15 m/s (ip to 0,30)
            </li>
            <li>
              <b>Pit:</b> 180mm min
            </li>
            <li>
              <b>Headroom:</b> 2450mm
            </li>
            <li>
              <b>Travel:</b> 25000mm max
            </li>
            <li>
              <b>Power supply:</b> 220v Single-phase / Three-phase
            </li>
          </ul>
          <ul className="specs-list">
            <li>
              <b>Traction:</b> Hydraulic
            </li>
            <li>
              <b>Capacity:</b> From 250kg to 650kg
            </li>

            <li>
              <b>Doors:</b> Automatic or swing
            </li>
            <li>
              <b>Motor power:</b> From 1,5 to 4 kw
            </li>
            <li>
              <b>Norms:</b> EN 81.41 , 2006/42/CE
            </li>
          </ul>
        </div>
      </div>

      <div className="feature-section">
        <h2 class="feature-title">Standard Features</h2>
        <ul className="feature-list">
          <li>
            <b>Entrances:</b> 1 or 2 opposite or adjacent accesses
          </li>
          <li>
            <b>COP:</b> mechanical side removable column with braille push
            buttons, open door, alarm maintenance key, LCD display, and
            emergency light/capacity plate
          </li>

          <li>
            <b>Landing Doors:</b> hinged with a standard window or automatic
            with central or side opening.
          </li>
          <li>
            <b>Floor buttons:</b> flush-mounted steel plate complete with
            braille push buttons, open door, alarm and / or display for floor
            indication
          </li>
          <li>
            <b>Cabin:</b> walls in plasticized sheet steel with stainless steel
            finishes, linoleum floor, white 4 LED spotlights ceiling, half-wall
            mirror with handrail, roof with hatch and photocell barrier.
          </li>
          <li>
            <b>Cabin doors:</b> on the automatic platform, finishes are like
            cabin walls
          </li>
        </ul>
      </div>
      <div className="feature-section">
        <h2 class="feature-title">Premium Features</h2>
        <ul className="feature-list">
          <li>
            <b>Hinged doors:</b> blinded, panoramic with transparent glass or
            custom. Ral paintings or steel coating Fire-fighting version el60-
            el120
          </li>
          <li>
            <b>COP:</b> enabling calls key, independent call key, cabin fan
            switch, cabin light switch, TFT display with customization of the
            capacity plate with customer logo, loudspeaker cut out, for
            synthesis
          </li>

          <li>
            <b>LOP:</b> enabling calls key, TFT display, floor indicators (out
            of service, direction arrows, alarm , arriving indicator)
          </li>

          <li>
            <b>Automatic Landing Doors:</b> 2AT (Two telescopic), 3AT (3
            telescopic leaves), 2AO (two opposite central antis), 4AO (four
            opposite central doors), blind or panoramic. Ral painting,
            plasticized sheet or steel. Fire fighting version EL60-EL120
          </li>
          <li>
            <b>Cabin doors:</b> in plasticized sheet, steel or panoramic.
          </li>
          <li>
            <b>Cabin:</b> full-wall mirror, bidirectional communication device,
            panoramic walls, special steel finishes. Ceiling with different
            finishes, vocal synthesis, protection bumper strips. Predisposition
            for bottom coating.
          </li>
          <li>
            <b>Supporting structure:</b> pres-folded sheet metal for exteriors
            and interiors with bolted elements. Finishes with RAL painting.
            Buffering with laminated glass or insulated panels and / or sheets
            cabin walls
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Specs
