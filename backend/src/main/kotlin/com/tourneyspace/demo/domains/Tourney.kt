package com.tourneyspace.demo.domains

import java.time.format.DateTimeFormatter
import java.util.*

data class Tourney(var name: String,
                   var location: String,
                   var image: String,
                   var date: Date,
                   var teams: List<String>,
                   var courts: Int,
                   var startTime: DateTimeFormatter? = DateTimeFormatter.ofPattern("HH:mm"),
                   var pause : DateTimeFormatter? = DateTimeFormatter.ofPattern("HH:mm"),
                   var gamelength: DateTimeFormatter? = DateTimeFormatter.ofPattern("HH:mm")
)

interface TourneyRepository {
    fun getAllTourneys(): List<Tourney>
    fun createTourney(tourneyToCreate: Tourney)
    fun deleteTourney(tourney: Tourney)
    fun findByTourneyId(tourney: Tourney)
}