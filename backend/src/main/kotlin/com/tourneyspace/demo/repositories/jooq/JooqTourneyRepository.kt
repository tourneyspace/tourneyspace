package com.tourneyspace.demo.repositories.jooq

import com.tourneyspace.demo.domains.Tourney
import com.tourneyspace.demo.domains.TourneyRepository

class JooqTourneyRepository : TourneyRepository {
    override fun getAllTourneys(): List<Tourney> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun createTourney(tourneyToCreate: Tourney) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun deleteTourney(tourney: Tourney) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun findByTourneyId(tourney: Tourney) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}