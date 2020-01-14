package com.tourneyspace.demo.domains

data class Tourney(
        var tourneyId: String,
        var name: String,
        var location: String,
        var image: String,
        var date: String,
        var teams: String,
        var courts: Int,
        var startTime: String,
        var pause: String,
        var gamelength: Double
)

interface TourneyRepository {
    fun getAllTourneys(): List<Tourney>
    fun createTourney(tourneyToCreate: Tourney)
    fun deleteTourney(tourney: Tourney)
    fun findByTourneyId(tourneyId: String) : Tourney
}