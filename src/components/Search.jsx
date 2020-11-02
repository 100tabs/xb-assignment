import React, { Component } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      result: [],
      loading: false,
      requets: 0,
      page: 1
    }
    this.debauncedEvent = debounce(this.getData, 300)
  }
  getSizeBg = (x) => {
    if (10000 <= x && x <= 100000) {
      return "p-1"
    }
    else if (100000 <= x && x <= 1000000) {
      return "p-2"
    }
    else if (100000 <= x && x <= 1000000) {
      return "p-3"
    }
    else if (100000 <= x && x <= 1000000) {
      return "p-4"
    }
    else if (100000 <= x && x <= 1000000) {
      return "p-5"
    }
    else if (100000 <= x && x <= 1000000) {
      return "p-6"
    }
    else if (100000 <= x && x <= 1000000) {
      return "p-7"
    }
    else {
      return "p-8"
    }
  }
  handleChange = e => {
    this.setState({
      ...this.state,
      query: e.target.value
    }, () => {
      this.debauncedEvent(1)
    })
  }

  getData = (page) => {
    const BASE_URL = 'https://swapi.dev/api/planets';
    const { query } = this.state;
    axios.get(`${BASE_URL}/?search=${query}&page=${page}`)
      .then(res => {
        let pageNum = res.data.next
        if (pageNum) {
          pageNum = pageNum.split('/')
          pageNum = pageNum[pageNum.length - 1].match(/page=(\d)/)
        }
        const data = res.data.results.sort((a, b) => {
          if (parseInt(a.population) < parseInt(b.population)) return -1;
          if (parseInt(a.population) > parseInt(b.population)) return 1;
          return 0;
        })
        this.setState({
          ...this.state,
          result: data,
          page: pageNum ? pageNum[1] : this.state.page
        })
      })

  }
  showResults = () => {
    const { result } = this.state
    if (result && result.length) {
      return (
        <div className="list-group list-group-flush mb-3 w-fixed-25 w-25 mx-auto">

          {result.map((planet, i) => {
            let id = planet.url.split('/')
            id = id[id.length - 2]
            const cssClass = this.getSizeBg(parseInt(planet.population))
            return <Link
              to={`/planets/${id}`}
              key={i}
              className={`list-group-item list-group-item-action ${cssClass}`}
            >
              {planet.name}
            </Link>
          })}
        </div>
      )
    }
  }

  render() {
    const { query } = this.state;
    return (
      <div className="container">
        <form className="mt-5" >
          <div className="input-group mb-3 w-fixed-25 w-25 mx-auto">
            <input type="text"
              className="form-control"
              placeholder="Search here"
              value={query}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
        <div>
          {this.showResults()}
        </div>
      </div>
    )
  }
}

export default Search;
