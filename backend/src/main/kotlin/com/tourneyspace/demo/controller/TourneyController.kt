package com.tourneyspace.demo.controller

import com.tourneyspace.demo.domains.Tourney
import com.tourneyspace.demo.domains.TourneyRepository
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
class TourneyController(private val tourneyRepository: TourneyRepository) {

    @GetMapping("/tourneys")
    fun getAllTourneys(): List<Tourney?>? {
        return (tourneyRepository.getAllTourneys())
    }

    @PostMapping("/addTourney/{name}/{location}/{image}/{date}/{teams}/{courts}/{startTime}/{pause}/{gameLength}")
    fun createTourney(@PathVariable name: String,
                      @PathVariable location: String,
                      @PathVariable image: String,
                      @PathVariable date: String,
                      @PathVariable teams: String,
                      @PathVariable courts: Int,
                      @PathVariable startTime: String,
                      @PathVariable pause: String,
                      @PathVariable gameLength: Double) {
        val tourney = Tourney("", name, location, image, date, teams, courts, startTime, pause, gameLength)
        tourneyRepository.createTourney(tourney)
    }
}